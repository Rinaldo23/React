import React from 'react'
import Spiderman from '../Spiderman.jpg'

function Banner() {
  return (
    // border-gray-900 border-8 rounded-xl m-1 
    <div className={`bg-[url(${Spiderman})] h-[90vh] bg-center bg-cover flex items-end`}>
        <div className={`bg-gray-900 bg-opacity-50 w-full text-white font-bold text-3xl p-4 flex justify-center`}>SpiderMan - No Way Home</div>
    </div>
  )
}

export default Banner