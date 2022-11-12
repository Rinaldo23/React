import React, { useState } from 'react'

function Pagination() {

  const [pageNumber, setPageNumber] = useState(1);

  function previousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  let nextPage = () => {
    setPageNumber(pageNumber + 1)
  }

  return (
    <div className='flex justify-center m-8'>
      <button onClick={previousPage} className='border-black border-2 border-indigo-500 p-2 text-indigo-500 text-xl border-r-0 rounded-l-xl'>Previous</button>
      <button className='border-black border-2 border-indigo-500 p-2 text-indigo-500 text-xl bg-gray-200'>{pageNumber}</button>
      <button onClick={nextPage} className='border-black border-2 border-indigo-500 p-2 text-indigo-500 text-xl border-l-0 rounded-r-xl'>Next</button>
    </div>
  )
}

export default Pagination