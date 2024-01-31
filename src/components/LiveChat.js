import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState('')
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages)

    useEffect(()=>{
        const i = setInterval(()=>{
            //API polling
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20) + " 🔥",
            }))
        }, 2000);
        return () => clearInterval(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
        <div className='h-[350px] ml-2 p-2 border border-black bg-slate-100 rounded-md overflow-y-scroll flex flex-col-reverse'>
            <div>
            {chatMessages.map((c, i) => (<ChatMessage key={i} name={c.name} message={c.message} /> )) }
            </div>
        </div>
            <form className='w-full p-2 ml-2 border border-black' 
            onSubmit={(e)=>{ e.preventDefault(); console.log("On Form Submit", liveMessage); 
            dispatch(addMessage({name: "Ansari Sadaan", message: liveMessage})); setLiveMessage(''); }}>
                <input className='px-2 w-80' type="text" value={liveMessage} onChange={(e)=> setLiveMessage(e.target.value)} />
                <button className='mx-2 px-2 bg-green-100'>Send</button>
            </form>
        </>
    )
}

export default LiveChat