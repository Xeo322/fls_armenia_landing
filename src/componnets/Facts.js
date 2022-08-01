import React from 'react'

export const Facts = () => {
    return (
        <div className='facts'>
            <div className='container facts__container'>
                <div className='facts__employees facts__object'>
                    <span className='facts__number'>300+</span>
                    <span className='facts__text'>Сотрудников</span>
                </div>
                <div className='facts__center facts__object'>
                    <span className='facts__number'>9</span>
                    <span className='facts__text'>Центров разработки по всему миру</span>
                </div>
                <div className='facts__projects facts__object'>
                    <span className='facts__number'>350+</span>
                    <span className='facts__text'>Успешно реализованных проектов</span>
                </div>
            </div>
        </div>
    )
}