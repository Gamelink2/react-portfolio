import React from "react";
import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <Form data-bs-theme="dark" >
      <Form.Group className="px-5 mt-5 mb-3 w-50 " controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="px-5 mb-1 w-50" controlId="exampleForm.ControlTextarea1" >
        <Form.Label>What do you have to say</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>
      <Form.Group className="px-5 mb-3 w-50" controlId="formFile" >
        <Form.Control type="file" />
      </Form.Group>
    </Form>
  );
}

export default TextControlsExample;
