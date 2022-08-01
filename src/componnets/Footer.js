import React from 'react';

import {ReactComponent as Logo} from '../assets/logo.svg';
import {ReactComponent as Instagram} from '../assets/instagram.svg';
import {ReactComponent as Facebook} from '../assets/facebook.svg';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <Logo className='footer__logo'/>
                <div className='footer__group'>
                    <h3 className='footer__title'>Хочешь к нам в команду?</h3>
                    <h3 className='footer__title'>Смело пиши:</h3>
                </div>
                <div className='footer__group'>
                    <span className='footer__text'>+382 687 408 26</span>
                    <span className='footer__text'>jobme@firstlinesoftware.com</span>
                </div>
                <div className='footer__group'>
                    <span className='footer__text'>Zgrada Vujanovic,</span>
                    <span className='footer__text'>Bečići 85316</span>
                </div>
                <div className='footer__social'>
                    <a href='https://www.facebook.com/FirstLineSoftwareFamily'><Facebook className='footer__container'/></a>
                    <a href='https://www.instagram.com/firstlinesoftware/'><Instagram className='footer__container'/></a>
                </div>
            </div>
        </footer>
    )
}