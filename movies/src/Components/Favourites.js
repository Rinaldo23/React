import React, { useState } from 'react'
import Image from '../Spiderman.jpg'
import Pagination from './Pagination'

function Favourites() {

  const [currGenre, setCurrGenre] = useState("All Genre")

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
                  <thead class="border-b">
                    <tr>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                        Name
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                        Rating
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                        Popularity
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                        Genre
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        <div className='flex flex-wrap items-center'>
                          <img src={Image} className='h-[10vh] w-[15vw] mr-5 rounded-lg bg-center bg-cover ' />
                          <div>SpiderMan - No Way Home</div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Cell
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Cell
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Pagination/>

    </div>
  )
}

export default Favourites