import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Oval } from 'react-loader-spinner'

function Movies() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=2905f9ab72e771d70a52c00ee3bbfaa9&page=1").then((res) => {
            setMovies(res.data.results)
        })
    }, [])

    return (
        <div>
            <div className='text-white font-bold text-3xl flex justify-center mt-6 mb-2 p-1'>Trending Movies</div>

            {
                movies.length == 0 ?
                    <div className='flex justify-center'> <Oval
                        height="80"
                        width="80"
                        radius="9"
                        color='black'
                        secondaryColor='white'
                        ariaLabel='three-dots-loading'
                        wrapperStyle
                        wrapperClass
                    /></div> :

                    <div className='font-bold text-2xl flex justify-center mb-4 flex-wrap '>
                        {
                            movies.map((movie) => (
                                <div className={`border-gray-900 border-2 rounded-xl m-4 bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[60vh] w-[20vw] bg-center bg-cover flex items-end hover:scale-110 transition delay-100 duration-500 ease-in-out scroll-smooth`}>
                                < div className={`bg-gray-900 bg-opacity-50 h-[10vh] w-full rounded-lg text-white flex justify-center items-center justify-center truncate ...`}>{movie.title}</div>
                            </div>
                            ))
                        }

                    </div>
            }
        </div >
    )
}

export default Movies