import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

function Movies({loggedIn, onQuery, shortFilm, moviesCards, handleLikeMovie, handleDelete, elseShow, elseClick, isLiked, isPreloader}) {
    return (
      <>
        <Header
        loggedIn={loggedIn}
        filmRoute={true}
        />
        <SearchForm
        onQuery={onQuery}
        shortFilm ={shortFilm}
         />
        <Preloader
        isPreloader={isPreloader} />
        <MoviesCardList
         moviesCards={moviesCards}
         handleLikeMovie={handleLikeMovie}
         handleDelete={handleDelete}
         elseShow={elseShow}
         elseClick={elseClick}
         isLiked={isLiked}
         />


        <Footer />
      </>
    );
}

export default Movies;