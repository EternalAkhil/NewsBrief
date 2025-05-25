import axios from "axios";
const fetchNewsEvery = async (query)=>{
    try{
        console.log('ftech news called')
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?category=${query}&apiKey=0fedb6bb29bd440a91d8e7b04139e894`)
        return res;
    }
    catch(err){
        return err;
    }
    
}
export default fetchNewsEvery;
