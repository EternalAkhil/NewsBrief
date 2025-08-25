import axios from "axios";
const api = axios.create({
    baseURL:"http://localhost:4000/news"
})
const fetchNewsEvery = async (query)=>{
    try{
        console.log('ftech news called')
        const res = await api.get(`?category=${query}`)

        return res;
    }
    catch(err){
        return err;
    }
    
}
export const searchNews = async (query) => {
    try {
        const res = await api.get(`/search?search=${query}`)
        return res

    }
    catch (err) {
        return err
    }
}

export const fetchNational = async () => {
    try {
        const res = await api.get("national")
        return res;

    }
    catch (err) {
        return err.message;
    }
}
export default fetchNewsEvery;
