import React from "react";


function SearchCheckbox({ shortFilm }) {

    return (
        <div className="search__checkbox-container">
              <label className="search__form-label" htmlFor="checkbox-slider" >
                <input type="checkbox" className="search__form-checkbox" id="checkbox-slider" onChange={shortFilm} />
                <span className="search___form-checkbox-span"></span>   
              </label>
              <p className="search__subtitle">Короткометражки</p>
            </div>
    )
}

export default SearchCheckbox;




