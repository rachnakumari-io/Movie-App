import MovieCard from "../components/MovieCard"
import {useState,useEffect} from "react"
import {searchMovies, getMovies} from "./services/api"

function Home() {
    const[searchQuery, setSearchQuery]=useState(""); //usestate use for rerender ..the magic of react
    const[movies, setMovies]=useState([]);  //list
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(true); //means when we r loading its true ..when loading completed set it to false ..we will write it 
    
    useEffect(function () {
  async function loadMovies() {
    try {
      const Movies = await getMovies();
      setMovies(Movies);
    } catch (err) {
      console.log(err);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
}
loadMovies();
  

  
}, []);

       
   async function handlesearch(e){
        e.preventDefault(); 
        if(!searchQuery.trim()) return
        if(loading)
            return 
        setLoading(true)
        try{
            const searchReasults= await searchMovies(searchQuery)
            setMovies(searchReasults)
            setError(null)
        }
        catch(err){
        setError("failed to search movies")
        }
        finally{
            setLoading(false)
        }
    
    

        
         //history saved not reload the whole app after submit
         setSearchQuery("");

    };
    
    
    return (
        <>
        <div className="search">
        <form onSubmit={handlesearch} className="search-form">
            <input type="text" placeholder="search"
            value={searchQuery}
            onChange ={(e) => setSearchQuery(e.target.value)}/>
            <button type ="submit"> 🔍</button>
        </form>
        </div>
        
        {loading?(<div className="laoding">loading...</div>):
        (
        <div className="movies-grid"> 
            {movies.map(
                (movie)=>(<MovieCard movie={movie} key={movie.id}/>
             //  movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id}/>) beause we will use API here ..just to showcase 
            ))}

        </div> )}

        </>

    );}


export default Home 