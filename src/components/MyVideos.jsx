import React, { useState } from 'react'
import axios from 'axios';
const MyVideos = () => {
    const [videos , setVideos] = useState(null);
    const dataFetch = async ()=>{
        try {
            const res = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBpVUXkFVTjgQ-eEUEQi9cxDfbhD8d1t6Q&q=world_affairs&type=video&part=snippet')
            setVideos(res.data.items);
        } catch (error ) {
            console.log(error);
        }
    };
    console.log(videos);
  return (
    <div>
        <button onClick={dataFetch}>data</button>
    </div>
  )
}

export default MyVideos;