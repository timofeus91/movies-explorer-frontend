import React from "react";
import icon from "../../images/searchIcon.svg";
import './SearchForm.css';

function SearchForm() {
    return (
      <section className="search">
        <div className="search__flex-container">
        <form className="search__form">
          <div className="search__input-container">
            <img className="searc__logo" alt='Лупа' src={icon} />
            <input className="search__input" placeholder='Фильм' required />
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