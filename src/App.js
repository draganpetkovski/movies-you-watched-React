import { useState } from "react";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];
const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
export default function App() {
  const [query, setQuery] = useState(tempMovieData);
  return (
    <div className="App">
      <Nav />
      <Main query={query} />
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav-head">
      <Logo />
      <SearchBox />
      <MoviesFound />
      {/* <Search />
      <MoviesFound /> */}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span className="img">🎬</span>
      <h2>Movies Database</h2>
    </div>
  );
}

function SearchBox() {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search movies ..." />
    </div>
  );
}

function MoviesFound() {
  return <span>Found x movies</span>;
}

function Main({ query }) {
  return (
    <main className="main-container">
      <MoviesList query={query} />
      <ContentBox />
    </main>
  );
}

function MoviesList({ query }) {
  const [openBtn, setOpenBtn] = useState(true);

  return (
    <ul className="movies-list">
      {openBtn &&
        query.map((movie) => <Movie movie={movie} key={movie.imdbID} />)}
      <button className="show-hide" onClick={() => setOpenBtn(!openBtn)}>
        {openBtn ? "-" : "+"}
      </button>
    </ul>
  );
}

function Movie({ movie }) {
  return (
    <li className="movie-item">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-item-content">
        <h3>{movie.Title}</h3>
        <span>📅{movie.Year}</span>
      </div>
    </li>
  );
}

function ContentBox() {
  return (
    <div className="watched-list-container">
      <Summary />
      <WatchedList />
    </div>
  );
}

function Summary() {
  return (
    <div className="summary">
      <h1>Movies you watched</h1>
      <div className="summary-items">
        <span>#️⃣</span>
        <div className="sum-small">
          <span>4</span>
          <span>Movies</span>
        </div>
        <span>⭐️6.72</span>
        <p>🌟7.50</p>
        <span>⏳</span>
        <div className="sum-small">
          <span>49</span>
          <span>min</span>
        </div>
      </div>
    </div>
  );
}

function WatchedList() {
  const [openBtn, setOpenBtn] = useState(true);
  return (
    <div className="watched-show-hide">
      <ul className="watched-list">
        {openBtn &&
          tempWatchedData.map((watchedMovie) => (
            <WatchedMovie watchedMovie={watchedMovie} />
          ))}
      </ul>
      <button className="show-hide" onClick={() => setOpenBtn(!openBtn)}>
        {openBtn ? "-" : "+"}
      </button>
    </div>
  );
}

function WatchedMovie({ watchedMovie }) {
  return (
    <li className="watched-movie">
      <img src={watchedMovie.Poster} alt={watchedMovie.Title} />
      {/* <h3>{watchedMovie.Title}</h3> */}
      <div className="watch-small-cont">
        <h2>{watchedMovie.Title}</h2>
        <div className="watched-items">
          <p>⭐️7</p>
          <p>🌟10</p>
          <p>⏳111 min</p>

          <button className="remove">X</button>
        </div>
      </div>
    </li>
  );
}
