import React, { Component } from 'react'
import { Container, Row, Tab, Nav, Col} from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='left-tabs-example' defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variants="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" >Vampire Survivors</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" >Gta VI</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >RDR 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth" >Ubisoft</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth" >Design</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey="first">
                                     <img  width="60%" src='https://gameriv.com/wp-content/uploads/2022/05/IMG_20220513_232012.jpg'></img>
                                     <p>
                                        Игра которая взорвола интернет за пару недель!
                                     </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                     <img  width="60%" src='https://avatars.dzeninfra.ru/get-zen_doc/1708669/pub_5e1b44eebb892c00af8e7417_5e1b45cb027a1500ae9df742/scale_1200'></img>
                                     <p>
                                     После нескольких лет слухов и сообщений Rockstar подтвердила, что работает над новой игрой Grand Theft Auto, и заявила, что процесс «идет полным ходом».
                                     </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                     <img  width="60%" src='https://cdn3.vectorstock.com/i/1000x1000/18/62/horse-on-sunset-background-vector-81862.jpg'></img>
                                     <p>
                                     После выхода Red Dead Redemption 2, как одна из самых ожидаемых и широко рекламируемых в это время игр, 
                                     побила несколько рекордов продаж — лишь за две недели после их начала было продано свыше 17 миллионов копий игры, 
                                     принеся компании Rockstar свыше 725 миллионов долларов прибыли. Она получила самые высокие оценки прессы — обозреватели 
                                     удостоили самых высоких похвал сюжет, персонажей, предоставленную игроку свободу и чрезвычайное внимание разработчиков к деталям.
                                     </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                     <img  width="60%" src='https://yandex.kz/images/search?pos=33&img_url=http%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFC75KdTXsAYcihf.jpg&text=ubisoft+games&rpt=simage&lr=162'></img>
                                     <p>
                                        Игра которая взорвола интернет за пару недель!
                                     </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                     <img  width="60%" src='https://gameriv.com/wp-content/uploads/2022/05/IMG_20220513_232012.jpg'></img>
                                     <p>
                                        Игра которая взорвола интернет за пару недель!
                                     </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}