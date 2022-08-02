import React, {useLayoutEffect, useState} from 'react';
import {Dot} from './Dot';

export const Terms = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div className='terms'>
            <div className='container terms__container'>
                <div className='terms__object'>
                    <Dot size='big' icon={require('../assets/first-person.png')}/>
                    <div className='terms__info'>
                        <h3 className='terms__title'>Полная поддержка в процессе релокации</h3>
                        <ul className='terms__list'>
                            <li className='terms__point'>
                                Компенсация перелета. Прямой рейс Ереван — Подгорица, если вы готовы приехать в августе, будет оплачен нами
                                (для вас и 2-х членов семьи)
                            </li>
                            <li className='terms__point'>
                                Оформление ВНЖ Черногории, открытие банковского счета и подготовка необходимых документов — на 100% наша ответственность!
                            </li>
                            <li className='terms__point'>
                                Вы будете работать в классном офисе с видом на море. А после можно заниматься SUP-серфингом или хайкингом с коллегами.
                            </li>
                        </ul>
                    </div>
                    <Dot size='small' location='left-up'/>
                    <Dot size='medium' location={size <=640 ?'left-down' : 'right'}/>
                </div>
                <div className='terms__object'>
                    <div className='terms__info'>
                        <h3 className='terms__title'>Наши ценности</h3>
                        <p className='terms__text'>
                            First Line Software - это команда профессионалов, построенная на взаимном уважении, доверии, открытости, и прозрачности.
                            <br/>
                            <br/>
                            Мы заботимся о наших клиентах и друг о друге.
                        </p>
                    </div>
                    <Dot size='big' icon={require('../assets/second-person.png')}/>
                    <Dot size='small' location='left-down'/>
                </div>
                <div className='terms__object'>
                    <Dot size='big' icon={require('../assets/third-person.png')}/>
                    <div className='terms__info'>
                        <h3 className='terms__title'>Открытость и <br/>поддержка</h3>
                        <p className='terms__text'>
                            Мы стремимся поддерживать тесные отношения между сотрудниками на всех уровнях, что гарантирует передачу знаний и профессиональный рост.
                            <br/>
                            <br/>
                            Мы открыты для новых задач и инноваций, постоянно изучая новые технологии и решения.
                        </p>
                    </div>
                    <Dot size='small' location='right-up'/>
                </div>
            </div>
        </div>
    )
}