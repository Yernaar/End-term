import React, { Component } from 'react'
import Carousel  from 'react-bootstrap/Carousel'
import gtaImg from '../assets/grand-theft-auto-vi-pc-game-cover_large.png'
import rdrImg from '../assets/1ed8dfed-0cfc-63c0-72fa-75c44e0b077f.jpg'
import ubisoftImg from '../assets/ubisoft-games.jpg'
import CarouselItem from 'react-bootstrap/CarouselItem'

export default class CarouselBox extends Component {
  render() {
    return (
        
      <Carousel>
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src={ gtaImg }
                alt='Gta'
               
            />
            <Carousel.Caption>
                <h3>Это свершилось: GTA 6 подтверждена, Rockstar заявила, что игра в разработке</h3>
                <p>После нескольких лет слухов и сообщений Rockstar подтвердила, что работает над новой игрой Grand Theft Auto, и заявила, что процесс «идет полным ходом».</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src={ rdrImg }
                alt='Rdr'
            />
            <Carousel.Caption>
                <h3>Red Dead Redemption 2: разбитая повозка – одно из случайных событий в игре.</h3>
                <p>Red Dead Redemption 2: разбитая повозка – одно из случайных событий в игре.
                13 декабря 2021
                4,6K прочитали
                Многие игроки в РДР 2 сталкивались с этой ситуацией на дороге.

                Эта встреча может произойти на пыльном перекрёстке недалеко от табачной плантации Брейтуэйтов, на лесной дороге недалеко от Строберри и, вполне возможно - ещё где-нибудь.
                Едущий по своим делам Артур видит возле большого валуна у дороги мёртвую лошадь и разбитую в хлам повозку.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src={ ubisoftImg }
                alt='Ubisoft'
            />
            <Carousel.Caption>
                <h3>В Steam добавили ещё одну порцию игр Ubisoft</h3>
                <p>Ubisoft продолжает возвращать в Steam свои игры. На этот раз в магазине появились странички Far Cry 6, Riders Republic, Tom Clancy’s Rainbow Six Extraction и Monopoly Madness.
                Французский издатель перестал распространять свои проекты через площадку Valve с 2019 года. Но в конце 2022-го политика компании изменилась. В Steam уже есть Immortals Fenyx Rising, Watch Dogs: Legion, Assassin’s Creed Valhalla и Anno 1800.</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        
    )
  }
}
