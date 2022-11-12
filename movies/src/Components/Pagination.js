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
    <div className='flex justify-center mt-8 '>
      <button onClick={previousPage} className='mb-8 border-black border-2 border-indigo-500 p-2 text-white text-xl border-r-0 rounded-l-xl'>Prev</button>
      <button className='mb-8 border-black border-2 border-indigo-500 p-2 text-white text-xl'>{pageNumber}</button>
      <button onClick={nextPage} className='mb-8 border-black border-2 border-indigo-500 p-2 text-white text-xl border-l-0 rounded-r-xl'>Next</button>
    </div>
  )
}

export default Pagination