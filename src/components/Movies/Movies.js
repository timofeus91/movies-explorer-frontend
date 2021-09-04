import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({loggedIn, onQuery, shortFilm, moviesCards, handleLikeMovie, handleDelete, elseShow, elseClick}) {
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
         moviesCards={moviesCards}
         handleLikeMovie={handleLikeMovie}
         handleDelete={handleDelete}
         elseShow={elseShow}
         elseClick={elseClick}
         />
        <Footer />
      </>
    );
}

export default Movies;