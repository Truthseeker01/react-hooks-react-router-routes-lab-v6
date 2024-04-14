import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {

  const params = useParams()
  console.log(params)
  const [movie, setMovie ] = useState({})

  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(res => res.json())
    .then(data => setMovie(data))
  }, [movieId])



  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <span>{movie.genres}</span>
      </main>
    </>
  );
};

export default Movie;
