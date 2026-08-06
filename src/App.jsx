import { useState } from 'react';
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import './App.css';
import {Routes,Route} from "react-router-dom";
import Favourites from './pages/Fav';
import Navbar from "./components/Navbar";
import MovieContext from "./context/ContextMovie";

function App() {
  const [favorites, setFavorites] = useState([]);

  

  return (
     <>
     <MovieContext.Provider value={{ favorites, setFavorites }}>

     <Navbar />
     <main className="main">
      <Routes>
        <Route path ="/"
                element={<Home/>}/>
          
        <Route path ="/favourites"
                element={<Favourites/>}/>

      </Routes>
     </main>
     </MovieContext.Provider>
    
    </>
  );
}

export default App