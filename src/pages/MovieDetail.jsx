import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CastList from '../components/CastList';
import MovieCardDetail from '../components/MovieCardDetail';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_KEY = "3a20035313bcf0f46a9509302cfcbcd9";

    const fetchDataMovie = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=fr`);
            const data = await response.json();
            setMovie(data);

            const responseCast = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=fr`);
            const dataCast = await responseCast.json();
            setCast(dataCast.cast.slice(0, 10));
        }
        catch (error) {
        console.error(error);

        }
        finally {
        setLoading(false);
        }
    };

  useEffect(() => {
    fetchDataMovie();
  }, []);

  return (
    <>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <div>
                <MovieCardDetail movie={movie} />

                <CastList cast={cast} />
            </div>
        )}
    </>
  );
}

export default MovieDetail;