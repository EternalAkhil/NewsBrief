import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import fetchNewsEvery from '../api/api'
import Newscard from '../components/Newscard'
import defimg from '../assets/download.jpeg'
const Technology = () => {
    const [visibleCount, setVisibleCount] = useState(6)
    const [loadSate,setLoadState] = useState(false)
    const [tech, setTech] = useState([])
    useEffect(() => {
        const getnews = async () => {
            
            const res = await fetchNewsEvery('technology');
            setTech(res.data.articles)
        }
        getnews()
    }, [])
  return (
    <>
        <h1 className='text-3xl font-bold mb-4 mt-8 ml-8'>Technology</h1>
            <section id='tech' className='grid p-4 lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4'>
                {tech.slice(0, visibleCount).map((item, id) => {
                    const title = item?.title;
                    const source = item?.source?.name;
                    const desc = item?.description;
                    const author = item?.author;
                    const content = item?.content;
                    const url = item?.url;
                    const imgurl = item?.urlToImage||defimg;
                    const time = item?.publishedAt;

                    return (<Newscard title={title} source={source} desc={desc} author={author} content={content} url={url} imgurl={imgurl} time={time} />)

                })}

            </section>
            {loadSate?<button className='bg-blue-500 text-white p-4 rounded-md lg:absolute right-0 lg:mr-4 ml-4 hover:cursor-pointer font-semibold lg:text-lg ' onClick={()=>{setVisibleCount(6)
                setLoadState(!loadSate)
            }}>show less</button>:<button className='bg-blue-500 text-white p-4 rounded-md lg:absolute right-0 lg:mr-4 ml-4 hover:cursor-pointer font-semibold lg:text-lg ' onClick={()=>{setVisibleCount(tech.length-sports.length%3)
                setLoadState(!loadSate)
            }}>Load more</button>}
           
        </>
    
  )
}

export default Technology
