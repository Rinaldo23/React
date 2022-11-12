import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Oval } from 'react-loader-spinner'
import Pagination from './Pagination';
import Banner from './Banner';

function Movies() {

    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState({});

    const [pageNumber, setPageNumber] = useState(1);

    let previousPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    }

    let nextPage = () => {
        setPageNumber(pageNumber + 1)
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=2905f9ab72e771d70a52c00ee3bbfaa9&page=${pageNumber}`).then((res) => {
            setMovies(res.data.results)
            setMovie(res.data.results[0])
        })
    }, [pageNumber])

    return (
        <>
            <Banner movie={movie} />
            <div>
                <div className='text-white font-bold text-lg md:text-3xl flex justify-center mt-4 md:mt-6 mb-1 md:mb-2 p-0 md:p-1'>Trending Movies</div>
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
                        <div className='md:font-bold text-sm md:text-2xl flex justify-center mb-4 flex-wrap '>
                            {
                                movies.map((movie) => (
                                    <div className={`border-gray-900 border-2 rounded-xl m-4 bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[20vh] w-[40vw] md:h-[25vh] md:w-[25vw] lg:h-[60vh] lg:w-[20vw] bg-center bg-cover flex items-end md:hover:scale-105 transition delay-10 duration-500 ease-in-out scroll-smooth`}>
                                        < div className={`bg-gray-900 bg-opacity-50 h-[5vh] md:h-[7vh] lg:h-[10vh] w-full rounded-lg text-white flex justify-center items-center text-center`}>{movie.title}</div>
                                    </div>
                                ))
                            }

                        </div>
                }
            </div >
            <Pagination pageNumber={pageNumber} previousPage={previousPage} nextPage={nextPage} />
        </>
    )
}

export default Movies