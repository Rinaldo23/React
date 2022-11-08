import React from 'react'

// NavBar
function NavBar() {
    return (
        <div className='bg-black border border-black flex items-center pl-10 py-2 space-x-8'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAgVBMVEX1xRgAAAD4xxjcsRb8yxnnuhfuvxf////YrhUGBQBdSwnDnBOhghAtJQT1wwNiTwpLPAeZew8WEgL768H99+j2yT741Xj2yDK3kxHhtRZVRQgaFQNRQQj/0BpsVwt6YgwmHwQ6LgasixGPcw7OpRSEag1CNQcfGQP/3Rv/1xsQDQIKezJDAAACj0lEQVRoge2ba5OqIBiACYFau9l22bRQ16w9Z///DzxIQujxXoszO+/zweFFh8dSgZcZ0FSwPXwgW3wctpkSTae7/WplTYvQarXfZd4dsmmVZrQT3r1trRDvp2hrXyvEW3QYxXtA9t5kk3GsAAAAAAAAAAAAAABYBSsKQYc4r/q/kW7MnBwmAueBj82TIhYhdQr4jNxFTNXQzr+WThQzjNjkQUjEaSM+E0Q2kxIRzcR4ruIL6e19K3kDcdI3Yld4F2WvuFtiejfPe2NmtFfvPbEXeycUFzw13kz1Wm+KybWD95O/2JsQHNZ5LxdPFZf4xd4rQZ4RFrwOZ98/5Q0JO9V5Zxifq72YCDVp7T8avB6iZlj2riu9nG7WQRDO23quBm/MZr29i2NeOLNmcYN34h/NqJP3pi9fDvm9sTymslv8PPXwGjR3mdVe9z07JlF2XC+HeW+svzdws2MkP99rH683P8aqTJuecI33Iu9YfipJ3MO74VyPWQO850TWyK4h/erjJSR5xms8MNrnvRJe/REM8HqPgfeLvlv0cu0NmE3vH+292vXqkWhh1fs3UtVHu96Hwe57pVtCdr2OquZ13uBHvOjtXrrVedGyxvtMf+VxnveOEan0+lz3LGWvvmaY11UNVXqjqx52Ct41o2reNcxLLvfSsdprUJg/G8QDxl/hzV+PtNVbyBcMwgHzDY/jVP1ZLd5ifmTgNE7sar3OfV7O27zFfHC+1qXmGXx1/iueGZLeb64n0U35bxq4kjMiiZxShk5r4lCV74tcH+ukv0O+rxYaRIGIi3zWYcGhcv3CbKnL+kapwVYpAAAAAAAAAAAAAAC/g7H2a4y1P2Ws/Thj7T8abb/VWPvLxtlP9w9lWzTR4rKV6QAAAABJRU5ErkJggg==" alt="IMDb"
            className='object-cover h-14 rounded-lg'/>
            <h2 className='text-white text-2xl font-bold'>Movies</h2>
            <h2 className='text-white text-2xl font-bold'>Favourites</h2>
        </div>
    )
}

export default NavBar