import React from 'react'
import Logo from '../IMDB.png'

// NavBar
function NavBar() {
    return (
        <div className='bg-black flex items-center pl-10 py-2 space-x-8'>
            <img src={Logo} alt="IMDb"
            className='object-cover h-14 rounded-lg'/>
            <h2 className='text-white text-2xl font-bold'>Movies</h2>
            <h2 className='text-white text-2xl font-bold'>Favourites</h2>
        </div>
    )
}

export default NavBar