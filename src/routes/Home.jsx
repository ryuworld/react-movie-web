import { useState, React, useEffect } from "react";
import Movie from "../components/Movie";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  async function getMovies() {
    try {
      const response = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year"
      );
      const json = response.data;
      setMovies(json.data.movies);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <strong>Lodading...</strong>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
