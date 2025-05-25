import React from 'react'
import { useEffect } from 'react'
import fetchNewsEvery from '../api/api'
import { useState } from 'react'
import Newscard from '../components/Newscard'
import defimg from '../assets/download.jpeg'
const Science = () => {
    const [visibleCount, setVisibleCount] = useState(6)
    const [loadSate,setLoadState] = useState(false)
    const [sports, setSports] = useState([])
    useEffect(() => {
        const getnews = async () => {
          
            const res = await fetchNewsEvery("science");
            setSports(res.data.articles)
        }
        getnews()
    }, [])

    return (
        <>
        <h1 className='text-3xl font-bold mb-4 mt-8 ml-8'>Science</h1>
            <section id='science' className='grid p-4 lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4'>
                {sports.slice(0, visibleCount).map((item, id) => {
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
            {loadSate?<button className='bg-blue-500 text-white p-4 rounded-md lg:absolute right-0 mr-4 hover:cursor-pointer font-semibold lg:text-lg ml-4 lg:mr-4 text-sm' onClick={()=>{setVisibleCount(6)
                setLoadState(!loadSate)
            }}>show less</button>:<button className='bg-blue-500 text-white text-sm p-4 rounded-md lg:absolute lg:right-0 ml-4 lg:mr-4 hover:cursor-pointer font-semibold lg:text-lg ' onClick={()=>{setVisibleCount(sports.length-sports.length%3)
                setLoadState(!loadSate)
            }}>Load more</button>}
           
        </>

    )
}

export default Science
