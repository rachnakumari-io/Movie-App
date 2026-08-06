import { useContext} from "react";
import MovieContext from "../context/ContextMovie";
function MovieCard({movie}){   //want this moviecard for every movie
    
        const { favorites, setFavorites } = useContext(MovieContext);

    const isFavorite = favorites.some(
        (fav) => fav.id === movie.id
    );

    function like() {

        if (isFavorite) {
            setFavorites(
                favorites.filter((fav) => fav.id !== movie.id)
            );
        } else {
            setFavorites([...favorites, movie]);
            window.alert("Added to favourites");
        }

    }


    return(
        <>
        <div className="movie-card">
            <div className="mov-image">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /> 
                <div className="move-overlay"> 
                    <button onClick={like}>{isFavorite ? "❤️" : "🤍"}</button>
                </div>
            </div>
        </div>
        <div className="movie-title">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        </div>       
        </>
    );

}

export default MovieCard