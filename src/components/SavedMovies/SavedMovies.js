import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css';

function SavedMovies({loggedIn, onQuery, shortFilm, moviesCards, handleDelete}) {
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
          moviesCards={moviesCards}
          handleDelete={handleDelete}
          elseShow={false}
          />
        <Footer />
      </>
    );
}

export default SavedMovies;