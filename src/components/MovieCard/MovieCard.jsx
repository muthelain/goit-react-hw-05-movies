import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  AdditionalInfo,
  MovieInfo,
  MoviePoster,
  StyledMovieCard,
} from './MovieCard.styled';

const placeholderImage = 'https://via.placeholder.com/500x750?text=No+Image';

export function MovieCard({ image, title, description, genres, rating, movieId }) {
  const genresList = genres?.map(genre => genre.name).join(', ');
  const userScore = Math.round(rating * 10);
  const imgURL = 'https://image.tmdb.org/t/p/w500';

  const imageUrl = image ? `${imgURL}${image}` : placeholderImage;

  return (
    <StyledMovieCard>
      <MoviePoster src={imageUrl} alt={title} />
      <MovieInfo>
        <h2>{title}</h2>
        <p>{`User Score: ${userScore}%`}</p>
        <div>
          <h3>Overview</h3>
          <p>{description || 'There is no overview information available'}</p>
        </div>
        <div>
          <h3>Genres</h3>
          <p>{genresList || 'There is no genre information available'}</p>
        </div>
        <h4>Additional information</h4>
        <AdditionalInfo>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </AdditionalInfo>
      </MovieInfo>
    </StyledMovieCard>
  );
}

MovieCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
  rating: PropTypes.number.isRequired,
  movieId: PropTypes.number.isRequired,
};
