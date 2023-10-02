import { useRef, useEffect, useState } from 'react';

const useTextAnimation = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const targetRef = useRef<HTMLSpanElement | null>(null);
  let interval: NodeJS.Timeout | null = null;
  let iteration = 0;
  let originalText = "";
  const [isHovered, setIsHovered] = useState(false);

  const animateText = () => {
    if (interval) {
      clearInterval(interval);
    }
  
    let iteration = 0; // Initialize iteration
  
    interval = setInterval(() => {
      if (targetRef.current) {
        const newText = [];
        for (let index = 0; index < originalText.length; index++) {
          newText.push(
            index < (iteration * 1 / 3)
              ? originalText[index]
              : letters[Math.floor(Math.random() * 26)]
          );
        }
        targetRef.current.innerText = newText.join('');
      }
  
      if (iteration * 1 / 3 >= originalText.length) {
        if (interval) {
          clearInterval(interval);
          interval = null;
        }
      }
      
      iteration++;
    }, 30);
  };  

  useEffect(() => {
    if (targetRef.current) {
      originalText = targetRef.current.textContent || '';
  
      const handleMouseOver = () => {
        setIsHovered(true);
        animateText();
      };
  
      const handleClick = () => {
        animateText();
      };

  
      targetRef.current.addEventListener('mouseover', handleMouseOver);
      targetRef.current.addEventListener('click', handleClick);
  
      return () => {
        if (interval) {
          clearInterval(interval);
        }
        targetRef.current?.removeEventListener('mouseover', handleMouseOver);
        targetRef.current?.removeEventListener('click', handleClick);
      };
    }
  }, [isHovered]);  

  return targetRef;
}; export default useTextAnimation;
