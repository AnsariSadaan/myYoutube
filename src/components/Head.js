import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }
    return (
        <div className='grid grid-flow-col p-2 m-2 shadow-sm'>
            <div className='flex col-span-1'>
                <img onClick={toggleMenuHandler} className='h-7 cursor-pointer mx-2' src="https://static.thenounproject.com/png/2254165-200.png" alt="menu" />
                <a href='/'><img className='h-7 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="youtube_logo" /></a>
            </div>
            <div className='col-span-10 text-center'>
                <input className='w-1/2 border border-gray-400 rounded-l-full p-2' type="text" />
                <button className='border border-gray-400 py-2 px-2 rounded-r-full bg-gray-100'>🔍</button>
            </div>
            <div className='col-span-1'>
                <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-icon"/>
            </div>
        </div>
    )
}

export default Head