import axios from 'axios';
export const BASE_URL='https://youtube-v31.p.rapidapi.com';
const options = { 

    params: {maxResults:50},
    headers: {
      // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Key': '568b21cf41msh1fcf261104225c9p1de911jsnd66ddb70b737',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI=async(url)=>{
    // here we making content dynamic
    const {data}=await axios.get(`${BASE_URL}/${url}`,options);
   // use variable to store response   
    return data;
};