import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css';

function SavedMovies({loggedIn, onQuery, shortFilm, moviesCards, handleDelete, isPreloader}) {
    return (
      <>
        <Header
          loggedIn={loggedIn}
          filmRoute={false} 
        />
        <SearchForm 
        onQuery={onQuery}
        shortFilm={shortFilm} 
        
        />
        <Preloader
        isPreloader={isPreloader}
        />
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