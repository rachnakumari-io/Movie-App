//this is for to connect home and favourites
import {Link } from "react-router-dom"

function Navbar() {
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourite</Link>
        </>

    ) ;
}

export default Navbar