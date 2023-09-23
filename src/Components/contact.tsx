import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import {useState} from 'react';

const Contact = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [emailStatus, setEmailStatus] = useState('');

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

            // Send the email with the form data
            emailjs.send('service_njf8vsa', 'template_vg2iuyi', data, '2onFMQ45aRNxHKJ4b')
                .then((result) => {
                    console.log(result.text);
                    formRef.current!.reset();
                    setEmailStatus('success');
                }, (error) => {
                    console.log(error.text);
                    setEmailStatus('error');
                });
        }
    };
    return (
        <section className='contact-background'>
            <Container className='contact-form'> 
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
        </section>
    );
};

export default Contact;
