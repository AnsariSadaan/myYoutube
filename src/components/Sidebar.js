import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)

    //early return pattern
    if(!isMenuOpen) return null;
    return (
        <div className='p-5 shadow-lg w-48'>
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscription</li>
            </ul>
            <h1 className='font-bold pt-5'>{"You >"} </h1>
            <ul>
                <li>Your Channel</li>
                <li>History</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
                <li>Like Videos</li>
            </ul>
            <h1 className='font-bold pt-5'>Subcription</h1>
            <ul>
                <li>Druvh Rathee</li>
                <li>Ansari</li>
                <li>Code With Harry</li>
                <li>Maulana tariq</li>
            </ul>
            <h1 className='font-bold pt-5'>Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Films</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sport</li>
                <li>Learning</li>
                <li>Fashion & beauty</li>
                <li>Podcast</li>
            </ul>
        </div>
    )
}

export default Sidebar