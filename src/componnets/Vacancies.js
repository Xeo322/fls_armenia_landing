import React from 'react';

export const Vacancies = ({scrollRef,vacancies}) => {
    return (
        <div ref={scrollRef} className='vacancies'>
            <h3 className='vacancies__title'>Вакансии</h3>
            <div className='container vacancies__container'>
                {vacancies.map((el,i) => {
                    return(
                        <div key={i} className='vacancies__item'>
                            <h4 className='vacancies__item-title'>{el.title}</h4>
                            <p className='vacancies__item-text'>{el.text}</p>
                            <a href={el.link}><button className='vacancies__item-button'>Подробнее</button></a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}