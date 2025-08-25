import axios from "axios";

export const searchNews = async (query) => {
    try {
        const res = await axios.get(`
https://newsapi.org/v2/everything?q=${query}&from=2025-04-21&sortBy=publishedAt&apiKey=0fedb6bb29bd440a91d8e7b04139e894`)
        return res

    }
    catch (err) {
        return err
    }


}
