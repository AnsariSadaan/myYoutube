import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
// import { YOUTUBE_COMMENTS_API } from '../utils/constants';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch()


  // const getComments = async () => {
  //   const data = await fetch(YOUTUBE_COMMENTS_API);
  //   const json = await data.json();
  //   console.log(json.error);
  // }

  useEffect(()=>{
    dispatch(closeMenu());
    // getComments();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  

  return (
    <div className='px-5'>
      <iframe width="900" height="310" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage