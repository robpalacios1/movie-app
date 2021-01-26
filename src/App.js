import React, { useState, useEffect, Fragment } from 'react'
import Movie from './components/Movie'
import './App.css';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

function App() {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      setMovies(data.results);
    })
  }, [])

  const handleOnSubmit = (event) => {
    event.preventDefault();
  }

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <Fragment>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {
          movies.length > 0 && movies.map(movie => (
            <Movie key={movie.id} {...movie}/>
          ))
        }
      </div>
    </Fragment>
  );
}

export default App;
