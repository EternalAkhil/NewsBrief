// src/NewsForm.js
import React, { useState } from 'react';
import axios from 'axios';

import backgroundImage from '../assets/download.jpeg'; // Correctly import the image

function NewsForm() {
    const [news, setNews] = useState('');
    const [result, setResult] = useState('');
    const [loader,setLoader] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)
        try {
            const response = await axios.post('http://localhost:5000/predict', { news });
            setResult(response.data.prediction);
        } catch (error) {
            console.error('Error making prediction:', error);
            setResult('Error processing your request.');
        }
        setLoader(false)
    };

    return (
        <div className="rounded-md text-gray-600 flex flex-col flex-grow items-center justify-center lg:w-1/2 w-full  shadow-lg bg-white lg:mx-auto lg:my-20 p-8" >
            <h2 className='font-bold text-center text-4xl mb-4 '> News Authencity Checker</h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full">
                <textarea
                    rows="6"
                    placeholder="Enter news snippet..."
                    value={news}
                    onChange={(e) => setNews(e.target.value)}
                    required
                    className='border w-full text-gray-700'
                />
                <button type="submit" className="bg-blue-400 p-4 text-white w-[150px] rounded-md font-semibold hover:cursor-pointer">Check News</button>
            </form>
            {loader&&<div className="flex justify-center items-center p-8">
                <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></span>
                <span className="ml-2">Loading...</span>
            </div>}
            {!loader&&result && <h3 className="text-4xl font-semibold mt-8">{result}</h3>}
        </div>
    );
}

export default NewsForm;
