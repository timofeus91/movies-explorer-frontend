import React from 'react';
import successIcon from '../../images/successIcon.svg';
import errorIcon from '../../images/errorIcon.svg';
import {
    useLocation
} from 'react-router-dom';
import './InfoTooltip.css';

function InfoTooltip(props) {
    //хук по проверке роута
    const routeWay = useLocation().pathname;
    const popupText = routeWay === '/signup' ? (props.isAuthReqSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.') : 'Информация обновлена!';

    return(
        <div className={`popup ${props.isOpen ? 'popup_opened' :''}`}>
            <div className="popup__container">
                <button className="popup__close" type='button' onClick={props.onClose}></button>
                <img className="popup__img" src={props.isAuthReqSuccess ? successIcon : errorIcon} alt={props.isAuthReqSuccess ? 'Успех!' : 'Неудача :('}></img>
                <h2 className="popup__title">{popupText}</h2>
            </div>
        </div>
    )
}

export default InfoTooltip;