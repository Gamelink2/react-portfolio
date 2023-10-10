import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import {useState, useEffect} from 'react';
import Toast from 'react-bootstrap/Toast';
const SERVICE_ID = 'service_njf8vsa';
const TEMPLATE_ID = 'template_vg2iuyi';

const Contact = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [emailStatus, setEmailStatus] = useState('');
    const [userEmail, setUserEmail] = useState('');
    useEffect(() => {
        if (emailStatus === 'error') {
            const timeoutId = setTimeout(() => {
                setEmailStatus('');
            }, 5000);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [emailStatus]);

    const classNames:{[key: string]: string} = {
        success: 'success',
        error: 'error',
        normal: 'normal',
        invalidEmail: 'invalid-email', // Add a class for invalid email
    };
    const formClassName = `contact-form ${classNames[emailStatus] || ''}`;    
    
    const sendEmail = (e:any) => {
        e.preventDefault();

        if (formRef.current) {
            // Get the form data as an object
            const formData = new FormData(formRef.current);

            // Convert the FormData object to an object literal
            const data: Record<string, any> = {};
            formData.forEach((value, key) => {
                data[key] = value as string;
            });
            const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email);
            
            if (!isValidEmail || data.email.trim() === '') {
                setEmailStatus('invalidEmail');
                return;
            }
            
            // Send the email with the form data
            emailjs.send(SERVICE_ID, TEMPLATE_ID, data, '2onFMQ45aRNxHKJ4b')
                .then((result) => {
                    console.log(result.text);
                    formRef.current!.reset();
                    setEmailStatus('success');
                    setUserEmail(data.email);
                }, (error) => {
                    console.log(error.text);
                    setEmailStatus('error');
                });
        }
    };
    return (
        <section className='contact-background'>
            
            <Container className={formClassName}> 
                <Row className="form-title">Contact us:</Row>
                <Form onSubmit={sendEmail} ref={formRef}>
                    <Row className="form-email">
                        <Form.Control name="email" className="form-form-email" type="email" placeholder="Your-email@example.com" required/>
                    </Row>
                    <Row className="form-subject">
                        <Form.Control name="from_name" className="form-form-subject" type="subject" placeholder="Your name:" required/>
                    </Row>     
                    <Row className="form-subject">
                        <Form.Control name="subject" className="form-form-subject" type="subject" placeholder="Subject:" required/>
                    </Row>                    
                    <Row className="form-message">
                        <Form.Control name="message" className="form-form-message" as="textarea" rows={7} placeholder="Message:" required/>
                    </Row>
                    <Row className='form-button'>
                        <Button className="form-form-button" type="submit">Send E-mail</Button>
                    </Row>
                </Form>
            </Container>
            {emailStatus === 'invalidEmail'  && (   
                <Toast
                    className="toast-invalid-email"
                    onClose={() => setEmailStatus('')}  
                    delay={3000} // Adjust the time it stays on the screen (in milliseconds)
                    >
                    <Toast.Header closeButton={true}>
                        <strong className="me-auto">Invalid Email</strong>
                    </Toast.Header>
                    <Toast.Body>Please enter a correct email.</Toast.Body>
                </Toast>
            )}
            {emailStatus === 'success'  && (
                <Toast className="toast-email-sent" onClose={() => setEmailStatus('')} >
                    <Toast.Header closeButton={true}>
                        <strong className="me-auto">Email sent</strong>
                    </Toast.Header>
                    <Toast.Body>Email sent with your contact info: {userEmail}</Toast.Body>
                </Toast>
            )}
        </section>
    );
};

export default Contact;
