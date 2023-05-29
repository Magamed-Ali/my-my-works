import React from 'react';
import {Form, Container, Button} from 'react-bootstrap';

function Contact() {
    return (
        <div >
            <Container className="contact">
                <h1>Send an email</h1>
                {/*<Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text>
                            W`ell never share email with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>

                </Form>*/}
                <Form/>
            </Container>
        </div>
    );
}

export default Contact;