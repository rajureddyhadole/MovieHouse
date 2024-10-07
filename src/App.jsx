import React, { useEffect } from 'react'

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=944a4c80";

function App() {
  const getMovies = async (title) => {
    try {
      const res = await fetch(`${API_URL}&s=${title}`);
      const data = await res.json();
      console.log(data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies("spiderman");
  }, []);

  return (
    <div>
      app
    </div>
  )
}

export default App