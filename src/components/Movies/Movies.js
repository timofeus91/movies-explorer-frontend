import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({loggedIn, onQuery, shortFilm}) {
    return (
      <>
        <Header
        loggedIn={loggedIn}
        filmRoute={true}
        />
        <SearchForm
        onQuery={onQuery}
        shortFilm ={shortFilm} />
        <MoviesCardList
         />
        <Footer />
      </>
    );
}

export default Movies;