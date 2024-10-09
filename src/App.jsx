import React, { useEffect, useState } from 'react'
import MovieCard from './components/MovieCard';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=944a4c80";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = async (title) => {

    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    getMovies("batman");
  }, []);

  return (
    <div className='w-full'>
      <h1 className='mt-10 text-3xl font-bold text-center text-transparent sm:text-4xl lg:text-5xl bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text'>Movie House</h1>
      <div className='flex mt-10 w-[70%] sm:w-[60%] lg:w-[50%] rounded-full overflow-hidden items-center mx-auto h-10'>
        <input className='flex-1 h-full pl-4 font-medium text-neutral-400 bg-neutral-700 focus:outline-none'
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={() => getMovies(searchTerm)} className='h-full px-4 py-1 bg-neutral-700'><svg xmlns="http://www.w3.org/2000/svg" width='26' height="26" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg></button>
      </div>
      {movies?.length > 0 ? (
        <div className='flex flex-wrap items-center justify-center w-full sm:w-[80%] lg:w-[80%] mx-auto mt-16'>
          {movies.map((movie, index) => <MovieCard key={index} movie={movie} />)}
        </div>
      ) : (
        <h2 className='text-xl font-semibold text-neutral-400'>No Movies found</h2>
      )}
    </div>
  )
}

export default App