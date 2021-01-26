import React from 'react'

/***** CSS *****/
import './Movie.css'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = (props) => {

    const setVoteClass = (vote) => {
        if(vote >= 8) {
            return 'green';
        } else if (vote >= 6) {
            return 'yellow';
        } else {
            return 'red';
        }
    }

    return (
        <div className="movie">
            <img
                src={
                    props.poster_path ? (
                        IMG_API + props.poster_path
                        ) : (
                            'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHHfaWQiOjEyMDd9&auto=format&fit=crop&1480&q=80'
                        )
                } alt={props.title}/>
            <div className="movie-info">
                <h3>{props.title}</h3>
                <span
                    className={`tag ${setVoteClass(props.vote_average)}`}
                >{props.vote_average}
                </span>
            </div>

            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{props.overview}</p>
            </div>
        </div>
    )
}

export default Movie
