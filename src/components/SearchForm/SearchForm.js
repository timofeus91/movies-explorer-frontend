import React from "react";
import icon from "../../images/searchIcon.svg";
import './SearchForm.css';

function SearchForm() {
    return (
      <section className="search">
        <form className="search__form">
          <div className="search__input-container">
            <img className="searc__logo" alt='Лупа' src={icon} />
            <input className="search__input" placeholder='Фильм' />
          </div>
          <div className="search__submit-container">
            <button className="search__submit" type="submit"></button>
            <div className="search__design-stick"></div>
            <div className="search__checkbox-container">
              <label class="search__form-label">
                <input type="checkbox" class="search__form-checkbox" checked />
                <span class="search___form-checkbox-span"></span>   
              </label>
              <p className="search__subtitle">Короткометражки</p>
            </div>
          </div>
        </form>
      </section>
    );
}

export default SearchForm;