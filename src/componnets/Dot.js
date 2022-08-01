import React from 'react';

export const Dot = ({size, icon, location}) => {
    const markup_handler = () => {
        let result = 'dot'
        if (size) {
            result = result.concat(' ', `dot--${size}`)
        }
        if (location) {
            result = result.concat(' ', `dot--${location}`)
        }
        return result
    }

    return(
        <div className={markup_handler()}>{icon && <img className='dot__img' src={icon} alt='Icon'/>}</div>
    )
}