import React from 'react'

function Pagination() {
  return (
    <div className='flex justify-center m-8'>
        <button className='border-black border-2 border-indigo-500 p-2 text-indigo-500 text-xl border-r-0 rounded-l-xl'>Previous</button>
        <button className='border-black border-2 border-indigo-500 p-2 text-indigo-500 text-xl bg-gray-200'>1</button>
        <button className='border-black border-2 border-indigo-500 p-2 text-indigo-500 text-xl border-l-0 rounded-r-xl'>Next</button>
    </div>
  )
}

export default Pagination