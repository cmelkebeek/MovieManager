import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const searchData = movies.filter((currentMovie) =>
    currentMovie.title.toLowerCase().includes(search.toLowerCase())
  );

  const fetchData = async () => {
    try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=3a20035313bcf0f46a9509302cfcbcd9&language=fr");
        const data = await response.json();
        setMovies(data.results);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

return (
    <div className="container">
        <h1>Films populaires</h1>

        <div className="movie-search">
            <input
                type="text"
                placeholder="Search your favorite movie..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>

        {loading ? (
            <p>Loading...</p>
        ) : (
            <>
                {searchData.length === 0 && search && (
                    <div className="no-results">
                        <p>Aucun films ne correspond à votre recherche : {search}</p>
                    </div>
                )}

                <div>
                    <ul className="cards">
                        {searchData.map((currentMovie) => (
                            <MovieCard key={currentMovie.id} movie={currentMovie} />
                        ))}
                    </ul>
                </div>
            </>
        )}
    </div>
);
}

export default MovieList;