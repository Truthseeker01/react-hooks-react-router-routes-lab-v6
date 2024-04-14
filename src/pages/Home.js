import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const [ movies, setMovies ] = useState([])
  console.log(movies)

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(res => res.json())
    .then(data => setMovies(data))
  }, [])

  const moviesList = movies.map(movie => <MovieCard key={movie.id} id={movie.id} title={movie.title}/>)
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {moviesList}
      </main>
    </>
  );
};

export default Home;
