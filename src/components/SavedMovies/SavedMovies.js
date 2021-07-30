import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css';

function SavedMovies({loggedIn, onQuery, shortFilm}) {
    return (
      <>
        <Header
          loggedIn={loggedIn}
          filmRoute={false} 
        />
        <SearchForm 
        onQuery={onQuery}
        shortFilm={shortFilm} />
        <MoviesCardList
          />
        <Footer />
      </>
    );
}

export default SavedMovies;