import React from 'react';
import successIcon from '../../images/successIcon.svg';
import errorIcon from '../../images/errorIcon.svg';
import './InfoTooltip.css';

function InfoTooltip(props) {
    return(
        <div className={`popup ${props.isOpen ? 'popup_opened' :''}`}>
            <div className="popup__container">
                <button className="popup__close" type='button' onClick={props.onClose}></button>
                <img className="popup__img" src={props.isAuthReqSuccess ? successIcon : errorIcon} alt={props.isAuthReqSuccess ? 'Успех!' : 'Неудача :('}></img>
                <h2 className="popup__title">{props.isAuthReqSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}</h2>
            </div>
        </div>
    )
}

export default InfoTooltip;