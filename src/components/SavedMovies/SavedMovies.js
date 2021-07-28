import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css';

function SavedMovies({loggedIn, onQuery}) {
    return (
      <>
        <Header
          loggedIn={loggedIn}
          filmRoute={false} 
        />
        <SearchForm 
        onQuery={onQuery} />
        <MoviesCardList
        routeMovies={false}  />
        <Footer />
      </>
    );
}

export default SavedMovies;