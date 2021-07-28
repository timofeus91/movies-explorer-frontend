import React from "react";
import icon from "../../images/searchIcon.svg";
import './SearchForm.css';
import { Validation } from '../../utils/Validation';

function SearchForm({ onQuery }) {

  //вытаскиваем все из Validation
  const { values, errors, isValid, handleChange, setValues } = Validation();

   //функция по сбрасыванию действия по умолчанию и для передачи значений инпутов в следующий компонент
   function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onQuery(values);
  }

    return (
      <section className="search">
        <div className="search__flex-container">
        <form className="search__form" onSubmit={handleSubmit} noValidate={true}>
          <div className="search__input-container">
            <img className="search__logo" alt='Лупа' src={icon} />
            <input name='query' id='query' autoComplete="off" value={values.query || ''} onChange={handleChange} className="search__input" placeholder='Фильм' required={true} minLength="1" maxLength='132' type='text' />
            <span className={`search__error-label ${errors.query ? 'search__error-label_active' : ''}`}>{errors.query}</span>
          </div>
          <div className="search__submit-container">
            <button className="search__submit" type="submit"></button>
            <div className="search__design-stick"></div>
          </div>
        </form>
            <div className="search__checkbox-container">
              <label className="search__form-label" htmlFor="checkbox-slider">
                <input type="checkbox" className="search__form-checkbox" id="checkbox-slider" />
                <span className="search___form-checkbox-span"></span>   
              </label>
              <p className="search__subtitle">Короткометражки</p>
            </div>
        </div>
      </section>
    );
}

export default SearchForm;