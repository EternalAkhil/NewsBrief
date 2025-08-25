import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { useState } from 'react'
import { searchNews } from '../api/api.js'
import Newscard from '../components/Newscard'
import defimg from '../assets/download.jpeg'
const Search = () => {
    const [search,setSearch] = useState()
    const [loader,setLoader] = useState(false)
    const [visibleCount, setVisibleCount] = useState(6)
        const [loadSate,setLoadState] = useState(false)
        const [results, setResults] = useState()
        const [error,setError] = useState()
    const handlesubmit =async ()=>{
        setLoader(true)
        try{
            const res = await searchNews(search)
            console.log(res.data)
            setResults(res.data.articles)
            setLoader(false)

        }
        catch (err){
            setError(err)
            setLoader(false)
        }


    }
  return (
    <section>
        <div className='w-full flex flex-row border-b-2 justify-center items-center lg:p-8 p-4 gap-4' >
            <input type="text" placeholder='search...' className='lg:w-1/2 p-4 w-full border' onChange={(e)=>setSearch(e.target.value)} 
            onKeyDown={(e)=>{
                if (e.key === 'Enter'){
                    handlesubmit()
                }
            }}
            />
            <FaSearch className='bg-black fill-white size-14 p-4 hover:cursor-pointer hover:bg-gray-700' onClick={handlesubmit} />
        </div>
        {loader&&<div className="flex justify-center items-center p-8">
                <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></span>
                <span className="ml-2">Loading...</span>
            </div>}
        {!loader&&results ?<div>
            <h2 className='lg:text-3xl text-2xl font-bold mb-4 mt-8 ml-8'>Search results for "{search.toUpperCase()}"</h2>
            <section id='health' className='grid p-4 lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4'>
                {results.slice(0, visibleCount).map((item, id) => {
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
            }}>show less</button>:<button className='bg-blue-500 text-white text-sm p-4 rounded-md lg:absolute lg:right-0 ml-4 lg:mr-4 hover:cursor-pointer font-semibold lg:text-lg ' onClick={()=>{setVisibleCount(results.length-results.length%3)
                setLoadState(!loadSate)
            }}>Load more</button>}
            </div>:<h1>{error}</h1>}
        
    </section>
  )
}

export default Search
