import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({id, year, title, summary, poster, genres}) {
    return (
        <Link className="movie" to={{
            pathname: `/movie/${title}-${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        <li className="genres_genre" key={index}>{genre}</li>
                    ))}
                </ul>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary.slice(0, 200)}...</p>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;