import React, {useEffect, useState} from 'react';

export const Header = ({handler}) => {
    const[loading,setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])
    return (
        <header className='header '>
            <div className={loading ? 'header__background header__background--fade' : 'header__background'}/>
            <div className='header__fill'/>
            <div className=' container header__container'>
                <h1 className={loading ? 'header__title fade-out' : 'header__title'}>Присоединяйся к <br/> First Line Software!</h1>
                <h2 className={loading ? 'header__text fade-out' : 'header__text'}>Стань частью нашей команды в Черногории</h2>
                <button onClick={() => handler()} className={loading ? 'header__button fade-out' : 'header__button'}>Получи работу мечты</button>
            </div>
        </header>
    )
}