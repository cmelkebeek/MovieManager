import { Link } from 'react-router';

const WhishListCard = ({ movie , removeFromWhishList}) => {

  return (
    <div className='movie-card'>
      <h2 className='movie-name'>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className='movie-image'/>
      <p>Note : {movie.vote_average} ⭐</p>
      <Link to={`/movie/${movie.id}`}><button className='card-button'>Détails</button></Link>
      <button className='card-button' onClick={() => removeFromWhishList(movie.id)}>Retirer</button>
    </div>
  );
}

export default WhishListCard;