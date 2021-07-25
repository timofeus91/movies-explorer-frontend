import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({loggedIn}) {
    return (
      <>
        <Header
        loggedIn={loggedIn}
        filmRoute={true}
        />
        <SearchForm />
        <MoviesCardList
        routeMovies={true} />
        <Footer />
      </>
    );
}

export default Movies;