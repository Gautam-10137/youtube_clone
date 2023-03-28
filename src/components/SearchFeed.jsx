import {useState,useEffect,}  from 'react'
import {Box,Stack,Typography} from '@mui/material'
import {Videos} from './'
import {fetchFromAPI} from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {

  const [videos,setVideos]=useState(null);
  const {searchTerm}=useParams();
  useEffect(()=>{
    // setVideos(null);
       fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=> setVideos(data.items));
       
        //To get data  we add then to perfom some task when async function fetchFromAPI return its promise (.then is procedure for 
        // async function .But for sync function we use 'const data=fetchFromAPI()'
        
       
  },[searchTerm]);

  return (

      <Box
      p={2} sw={{overflowY:'auto',
      height:'90vh',flex:2
    }}
      >
        <Typography
        variant="h4" fontWeight="bold" mb={2} sx={{
          color:'white'
        }}>
        Search Results for:
          <span style={{color:'#F31503'}}> {searchTerm}</span> videos
        </Typography>
        
        <Videos videos={videos}/>
      </Box>

  )
}

export default SearchFeed
