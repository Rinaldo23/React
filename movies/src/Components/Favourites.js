import React, { useEffect, useState } from 'react'
import Image from '../Spiderman.jpg'
import Pagination from './Pagination'

function Favourites() {

  let genreids = {
    28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family',
    14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV',
    53: 'Thriller', 10752: 'War', 37: 'Western'
  };

  const [currGenre, setCurrGenre] = useState("All Genre")
  const [favourites, setFavourites] = useState([])
  const [genres, setGenre] = useState([])

  let filteredMovies = []

  filteredMovies = favourites.filter((movie) => currGenre == "All Genre" ? favourites : genreids[movie.genre_ids[0]] == currGenre)

  let removeMovie = (movie) => {
    let newArr = favourites.filter((m) => {
      return m.id != movie.id
    })
    setFavourites([...newArr])
    localStorage.setItem("imdb", JSON.stringify(newArr))
  }

  useEffect(() => {
    let oldFav = localStorage.getItem("imdb")
    oldFav = JSON.parse(oldFav) || []
    setFavourites([...oldFav])
  }, [])

  useEffect(() => {
    let temp = favourites.map((movie) => genreids[movie.genre_ids[0]])
    // console.log(temp)
    temp = new Set(temp)
    setGenre(["All Genre",...temp])
  },[favourites])

  return (
    <div className='bg-white'>
      <div className='flex justify-center felx-wrap text-white p-2'>
        {
          genres.map((genre) => (
            <button className={
              currGenre == genre ?
                'border m-2 p-1 px-2 rounded-lg font-bold bg-cyan-700' :
                'border m-2 p-1 px-2 rounded-lg font-bold bg-blue-400 hover:bg-cyan-700'
            }
            onClick={() => setCurrGenre(genre)}
            >{genre}</button>
          ))
        }
      </div>

      <div className='text-center'>
        <input type="text" placeholder='Search' className='border border-black m-2 rounded-md text-center ' />
        <input type="number" placeholder='Rows' className='border border-black m-2 rounded-md text-center' />
      </div>

      <div>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-center">
                  <thead class="bg-gray-50 min-w-full">
                    <tr>
                      <th scope="col" class="text-sm font-medium w-[40vw] px-6 py-4">
                        Name
                      </th>
                      <th scope="col" class="text-sm font-medium px-6 py-4">
                        Rating
                      </th>
                      <th scope="col" class="text-sm font-medium px-6 py-4">
                        Popularity
                      </th>
                      <th scope="col" class="text-sm font-medium px-6 py-4">
                        Genre
                      </th>
                      <th scope="col" class="text-sm font-medium px-6 py-4">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    {
                      filteredMovies.map((movie) => (
                        <tr key={movie.id}>
                          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-center'>
                            <div className='flex items-center'>
                              <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}
                                className='border-gray-900 border-2 rounded-xl mr-6 h-[20vh] w-[40vw] md:h-[25vh] md:w-[25vw] lg:h-[15vh] lg:w-[12vw] bg-center bg-cover' />
                              <div className='font-medium text-base'>{movie.title}</div>
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-center'>
                            <div>{movie.vote_average}</div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-center'>
                            <div>{movie.popularity}</div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-center'>
                            <div>{genreids[movie.genre_ids[0]]}</div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-center'>
                            <button onClick={() => removeMovie(movie)} className='text-red-600 hover:text-red-900'>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Pagination />

    </div>
  )
}

export default Favourites