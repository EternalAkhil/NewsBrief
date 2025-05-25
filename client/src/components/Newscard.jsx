import React from 'react'
import { useState } from 'react'

const Newscard = ({title:title,source:source,desc:desc,author:author,content:content,url:url,imgurl:imgurl,time:time}) => {
  const [showcard,setShowcard] = useState(false)

  return (
    <div className='flex flex-col overflow-hidden transition hover:shadow-lg border border-white rounded-xl' onClick={()=>setShowcard(!showcard)}>
      
      {imgurl&&<img
      src={imgurl}
      alt = {title}
      className='w-full h-55 object-cover'
      ></img>}
      <div className='p-4 flex flex-col flex-grow'>
        <h2 className='text-lg font-semibold text-gray-800 line-clamp-2 mb-2'>{title}</h2>
        <p className='text-gray-600 text-sm line-clamp-3 mb-4'>{desc}</p>
        <div className='text-gray-500 flex items-center justify-between'><span>{source}</span>
        <span>{new Date(time).toLocaleDateString()}</span></div>
        <a href={url}
        target='_blank'
        className='text-blue-800 mt-3 inline-block items-center'
        >Read more →</a>
        
      </div>
      
    </div>
  )
}

export default Newscard
