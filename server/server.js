import express from 'express'
import dotenv from 'dotenv';
import axios from 'axios';
import cors from "cors"
dotenv.config()


const app = express()
const PORT = process.env.PORT || 4000
app.use(express.json())
app.use(cors())
app.get("/news",async(req,res)=>{
    const category = req.query.category;
    console.log(category)
    try {
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${process.env.API}`)
        // console.log(news.data)
        if (news){
            return res.status(201).json(news.data)
        }

        
    } catch (error) {
        
       return res.status(404).json({msg:error.message})
    }

    
})
app.get("/news/search", async (req, res) => {
    const query = req.query.search;
    console.log(query);
    // Set 'today' to 2 days back from now
    const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0];
    console.log(twoDaysAgo);
    try {
        const response = await axios.get(
            `https://newsapi.org/v2/everything?q=${query}&from=${twoDaysAgo}&sortBy=publishedAt&apiKey=${process.env.API}`
        );
        console.log(response.data);
        return res.status(201).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ msg: error.message })
        
    }
    
})
app.get("/news/national",async(req,res)=>{
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=india&language=en&apiKey=${process.env.API}`)
        return res.status(201).json(response.data)
}catch{
    return res.status(404).json({msg:error.message})
}})
app.listen(PORT,()=>{
    console.log("server is live");
})