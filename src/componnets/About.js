import React, {useLayoutEffect, useState} from 'react';
import {ReactComponent as Line} from '../assets/line.svg';
import {ReactComponent as FlippedLine} from '../assets/flipped-line.svg';

const img = require('../assets/fls-team.webp')


export const About = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return(
        <div className='about'>
            <div className='about__container container'>
                {size <=980 ? <FlippedLine className='about__line 111'/> : <Line className='about__line'/>}
                {/*<Line className={window.innerWidth <= 980 ? 'about__line hidden': 'about__line'}/>*/}
                {/*<FlippedLine className={window.innerWidth > 980 ? 'about__line hidden': 'about__line'}/>*/}
                {/*<div className={window.innerWidth <=980 ? 'about__line about__line--flipped' : 'about__line'}/>*/}
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
                    <a href='https://firstlinesoftware.com/'><button className='about__button'>{window.innerWidth <= 980 ? 'Узнать больше' : 'Узнать больше о компании'}</button></a>
                </div>
            </div>
        </div>
    )
}