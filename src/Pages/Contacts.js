import React, { Component } from 'react'
import { Container, Form, Button, FormLabel, FormControl } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
           <Container style={{width: '500px'}}>
            <h1 className='text-center'> Contact us </h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text>
                        Вы можете улучшить наш сервис, оставив советы и свой Email.
                    </Form.Text>
                </Form.Group>

                
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Example textarea</Form.Label>
                <FormControl as="textarea" rows="3"></FormControl>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type='checkbox' label="Check me out"></Form.Check>
            </Form.Group>
            <Button variant='primary' type="submit">Submit</Button>
            </Form>
           </Container>
        )
    }
}