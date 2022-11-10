import React from 'react'
import Logo from '../IMDB.png'
import {Link} from 'react-router-dom'

// NavBar
function NavBar() {
    return (
        <div className='bg-black flex items-center pl-10 py-2 space-x-8'>
            <img src={Logo} alt="IMDb"
            className='object-cover h-14 rounded-lg'/>
            <Link to='/movies' className='text-white text-2xl font-bold'>Movies</Link>
            <Link to={'/favourites'} className='text-white text-2xl font-bold'>Favourites</Link>
        </div>
    )
}

export default NavBar