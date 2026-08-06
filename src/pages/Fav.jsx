import { useContext } from "react";
import MovieContext from "../context/ContextMovie";
import MovieCard from "../components/MovieCard";

function Favourites() {

    const { favorites } = useContext(MovieContext);

    if (favorites.length === 0) {
        return (
            <div className="favorites-empty">
                <h2>No Favorite Movies Yet ❤️</h2>
                <p>Start adding your favorite movies!</p>
            </div>
        );
    }

    return (
        <div className="movies-grid">
            {favorites.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </div>
    );
}

export default Favourites;