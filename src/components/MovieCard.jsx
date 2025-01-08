import { Link } from 'react-router';

const MovieCard = ({ movie }) => {

  return (
    <div className='movie-card'>
      <h2 className='movie-name'>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className='movie-image'/>
      <p>Note : {movie.vote_average.toFixed(1)} ⭐</p>
      <Link to={`/movie/${movie.id}`}><button className='card-button'>Détails</button></Link>
    </div>
  );
}

export default MovieCard;