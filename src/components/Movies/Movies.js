import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({loggedIn, onQuery}) {
    return (
      <>
        <Header
        loggedIn={loggedIn}
        filmRoute={true}
        />
        <SearchForm
        onQuery={onQuery} />
        <MoviesCardList
        routeMovies={true} />
        <Footer />
      </>
    );
}

export default Movies;