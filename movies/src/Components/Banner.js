import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Banner(movieProp) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=2905f9ab72e771d70a52c00ee3bbfaa9&page=1").then((res) => {
      setMovie(res.data.results[0])
    })
  }, [])

  return (

    <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[90vh] ml-4 mr-4 rounded-xl bg-center bg-cover flex items-end`}>
      <div className={`bg-gray-900 bg-opacity-50 w-full rounded-xl text-white font-bold text-3xl p-4 flex justify-center`}>{movie.title}</div>
    </div>

  )
}

export default Banner