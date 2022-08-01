import React from 'react';
import {ReactComponent as Line} from '../assets/line.svg';

const img = require('../assets/fls-team.webp')


export const About = () => {
    return(
        <div className='about'>
            <div className='about__container container'>
                <Line className='about__line'/>
                <div className='about__img'>
                    <img className='about__photo' src={img} alt='фото команды флс'/>
                </div>
                <div className='about__info'>
                    <h3 className='about__title'>Кто мы?</h3>
                    <p className='about__text'>
                        First Line Software — международная команда профессионалов, которые разрабатывают инновационные решения в IT-индустрии.
                        <br/>
                        <br/>
                        Мы стараемся сохранять атмосферу открытости, ценим свободу и гибкость во всем.
                    </p>
                    <a href='https://firstlinesoftware.com/'><button className='about__button'>Узнать больше о компании</button></a>
                </div>
            </div>
        </div>
    )
}