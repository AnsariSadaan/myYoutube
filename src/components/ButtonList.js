import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list = ["All", "Gaming", "Cricket", "Songs", "Movies", "Live", "Soccer", "Valentine", "Javascript", "Courses", "Lattest"]
    return (
        <div className='flex'>
            {list.map((list)=> <Button key={list} name={list} />)}
        </div>
    )
}

export default ButtonList