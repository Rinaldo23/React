import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Banner({movie}) {
  return (
    
    <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[30vh] md:h-[90vh] bg-center bg-cover flex items-end`}>
      <div className={`bg-gray-900 bg-opacity-50 w-full text-white font-bold text-base md:text-3xl p-2 md:p-4 flex justify-center`}>{movie.title}</div>
    </div>

  )
}

export default Banner