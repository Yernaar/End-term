import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardGroup, Card, Button }  from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox />
            <Container>
                <h2>Weekly news</h2>
                <CardGroup className='m-4'>
                    <Card>
                        <Card.Img
                            variant="top"
                            src='https://beltion-game.com/wp-content/uploads/2022/06/smi-ubisoft-ne-budet-provodit-svoyo-shou-v-iyune.jpg'
                        />
                        <Card.Body>
                            <Card.Title>Ubisoft</Card.Title>
                            <Card.Text>
                            В Steam добавили ещё одну порцию игр Ubisoft
                            </Card.Text>
                            <Button variant='primary' > About </Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>GTA VI</Card.Title>
                            <Card.Text>
                            Это свершилось: GTA 6 подтверждена, Rockstar заявила, что игра в разработке
                            </Card.Text>
                            <Button variant='primary' > About </Button>
                        </Card.Body>
                        <Card.Img
                            variant="botton"
                            src='https://gig-life.ru/uploads/posts/2022-02/1644132731_slovam-razrabotchika-novaja-gta-budet-osobennoj.jpeg'
                        />
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src='https://pkmanager.twingalaxies.com/assets/article/2018/11/26/red-dead-redemption-2-online-beta-release-date_feature.jpg'
                        />
                        <Card.Body>
                            <Card.Title>RDR 2</Card.Title>
                            <Card.Text>
                            Red Dead Redemption 2: разбитая повозка – одно из случайных событий в игре
                            </Card.Text>
                            <Button variant='primary' > About </Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
           
            </>
        )
    }
}