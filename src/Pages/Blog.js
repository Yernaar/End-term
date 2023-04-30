import React, { Component } from 'react'
import { Container, Card, Col, Row, ListGroup } from 'react-bootstrap';

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Card className='m-5'>
                            <img
                            width={150}
                            height={150}
                            className='mr-3'
                            
                            />
                            <Card.Body>
                                <h5>Blog post</h5>
                                <p>
                                    nsklfhaklhfkdahsl
                                </p>
                            </Card.Body>
                        </Card> 
                        <Card className='m-5'>
                            <img
                            width={150}
                            height={150}
                            className='mr-3'
                            
                            />
                            <Card.Body>
                                <h5>Blog post</h5>
                                <p>
                                    nsklfhaklhfkdahsl
                                </p>
                            </Card.Body>
                        </Card>                        
                        <Card className='m-5'>
                            <img
                            width={150}
                            height={150}
                            className='mr-3'
                            
                            />
                            <Card.Body>
                                <h5>Blog post</h5>
                                <p>
                                    nsklfhaklhfkdahsl
                                </p>
                            </Card.Body>
                        </Card>                        
                        <Card className='m-5'>
                            <img
                            width={150}
                            height={150}
                            className='mr-3'
                            
                            />
                            <Card.Body>
                                <h5>Blog post</h5>
                                <p>
                                    nsklfhaklhfkdahsl
                                </p>
                            </Card.Body>
                        </Card>                                               
                    </Col>
                    <Col md="3">
                        <h5 className='text-center mt-5'>Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Games</ListGroup.Item>
                                <ListGroup.Item>Soon</ListGroup.Item>
                                <ListGroup.Item>Game fuel</ListGroup.Item>
                                <ListGroup.Item>New games</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className='mt-3'>
                            <Card.Body>
                                <Card.Title>
                                    Side widget
                                </Card.Title>
                                <Card.Text>
                                    Здесь публикуется игровые новости, статьи и игровые новинки
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}