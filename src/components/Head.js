import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store)=> store.search);
    const dispatch = useDispatch()

    /*
    * searchCache = {
    *  "iphone" : ["iphone 11", iphone 14]
    * }
    * 
    * 
    */

    useEffect(() => {
        //Api call
        // console.log(searchQuery);

        // make an API call after every key press 
        // but if the difference between 2 key press is < 200ms
        // decline the API call 

        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }else{
                getSearcgSuggestions();
            }
        }, 200);
        return () => {
            clearTimeout(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);


    /*
    * key - i
    * - re-render the component
    * - useEffect();
    * - start timer => make api call after 200ms 
    * 
    * 
    * key - ip
    * - destroy the component (useEffect return method call)
    * - render the component
    * - useEffect();
    * - start timer => make api call after 200ms
    * 
    * 
    * when you do timeout cycle it takes care of the timer and puts into a place  and browser counts it
    * setTimeout(200);
    */

    const getSearcgSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }))
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }



    return (
        <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img onClick={toggleMenuHandler} className='h-7 cursor-pointer mx-2' src="https://static.thenounproject.com/png/2254165-200.png" alt="menu" />
                <a href='/'><img className='h-7 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="youtube_logo" /></a>
            </div>
            <div className='col-span-10 px-10'>
                <div >
                    <input className='px-5 w-1/2 border border-gray-400 rounded-l-full p-2' type="text" placeholder='Search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestions(true)} onBlur={()=> setShowSuggestions(false)}/>
                    <button className='border border-gray-400 py-2 px-2 rounded-r-full bg-gray-100'>🔍</button>
                </div>
                <div className='w-[28.2rem] bg-white py-2 px-2 absolute shadow-lg rounded-lg border border-gray-100'>
                    {showSuggestions && <ul>
                        {suggestions.map((s) => <li className='py-2 px-3 shadow-sm hover:bg-gray-100' key={s}>🔍 {s}</li> )}
                    </ul>}
                </div>
            </div>
            <div className='col-span-1'>
                <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-icon" />
            </div>
        </div>
    )
}

export default Head