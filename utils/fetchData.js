import axios from "axios";
const baseURL = "https://bayut.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
};

const fetchData = async (url) => {
    try{
        const response = await axios.get(`${baseURL}/${url}`,options);
        return response.data;
    }
    catch(error){
        return {error: error.message};
    }
}

export {fetchData, baseURL};