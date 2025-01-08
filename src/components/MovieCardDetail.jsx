import styles from "./MovieCardDetail.module.css";
import ScoreCircle from './ScoreCircle'; 
import { WhishListContext } from "../context/WhishListProvider";
import { useContext } from 'react';

const MovieCard = ({movie}) => {
  const { addToWhishList } = useContext(WhishListContext);

  return (
    <div className={styles.movieCard}>
      <div className={styles.moviePoster}>
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
      </div>

      <div className={styles.movieContent}>
        <div className={styles.movieHeader}>
          <h1>{movie.title}</h1>
          <p className={styles.movieDetails}>
            {movie.release_date} • { movie.genres.map((genre) =>(
                <>{genre.name} </>
            ))} • {movie.runtime} min
          </p>
        </div>
        <div>
            <ScoreCircle score={movie.vote_average} />

            <div className={styles.movieActions}>
            <button className={styles.trailerButton} onClick={() => addToWhishList(movie)}>Ajouter à la liste de souhait</button>
            </div>
        </div>
        
        <div className={styles.movieSynopsis}>
          <h2>Synopsis</h2>
          <p>
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
