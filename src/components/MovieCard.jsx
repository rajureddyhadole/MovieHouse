import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className='relative mx-2 my-4 overflow-hidden tracking-wide shadow-md rounded-xl shadow-black/85'>
      <span className='absolute px-3 py-1 font-medium rounded-full top-1 left-1 bg-neutral-500'>{movie.Year}</span>
      <img className='object-fill w-[280px] h-[400px] ' src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/280x400"} alt="poster" />
      <div className='absolute justify-center items-start px-5 gap-1 bottom-0 left-0 right-0 flex flex-col top-[300px] bg-neutral-800'>
        <span className='text-sm font-semibold tracking-wider text-neutral-400'>{movie.Type}</span>
        <span className='text-lg font-semibold tracking-wide text-yellow/70'>{movie.Title}</span>
      </div>
    </div>
  )
}

export default MovieCard