import React, { useEffect, useState } from 'react'
import Image from '../Spiderman.jpg'
import Pagination from './Pagination'

function Favourites() {

  const [currGenre, setCurrGenre] = useState("All Genre")
  const [favourites, setFavourites] = useState([])

  let removeMovie = (movie) => {
    let newArr = favourites.filter((m) => {
      return m.id != movie.id
    })
    setFavourites([...newArr])
    localStorage.setItem("imdb",JSON.stringify(newArr))
  }

  useEffect(() => {
    let oldFav = localStorage.getItem("imdb")
    oldFav = JSON.parse(oldFav)
    setFavourites([...oldFav])
  }, [])

  return (
    <div className='bg-white'>
      <div className='flex justify-center felx-wrap text-white p-2'>
        <button className={
          currGenre == "All Genre" ?
            'border m-2 p-1 px-2 rounded-lg font-bold bg-cyan-700' :
            'border m-2 p-1 px-2 rounded-lg font-bold bg-blue-400 hover:bg-cyan-700'
        }>All Genre</button>
        <div className={
          false ?
            'border m-2 p-1 px-2 rounded-lg font-bold bg-cyan-700' :
            'border m-2 p-1 px-2 rounded-lg font-bold bg-blue-400 hover:bg-cyan-700'
        }>Action</div>
        <div className={
          false ?
            'border m-2 p-1 px-2 rounded-lg font-bold bg-cyan-700' :
            'border m-2 p-1 px-2 rounded-lg font-bold bg-blue-400 hover:bg-cyan-700'
        }>Drama</div>

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
                      favourites.map((movie) => (
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
                            <div>{movie.genre_ids[0]}</div>
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