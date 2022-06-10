import axios from "axios";

const API_URL = 'https://breakingbadapi.com/api/characters';

export const fetchData = async (text) => {
    try{
        return await axios.get(`${API_URL}?name=${text}`);
    }catch(error){
        console.log("Error while fetching the data", error)
    }
}