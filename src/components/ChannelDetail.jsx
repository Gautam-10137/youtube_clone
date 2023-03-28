import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import {Videos,ChannelCard} from './';  
import { fetchFromAPI } from '../utils/fetchFromAPI';
const ChannelDetail = () => {
  const [channelDetail,setChannelDetail]=useState();
  const [videos,setVideos]=useState(null);

  const {id}=useParams();
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      if(data.items){
        setChannelDetail(data?.items[0]);
      }

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  return (
    <Box minHeight='95vh'>
      <Box>
       <div style={{background: 'linear-gradient(90deg, rgba(216,179,222,1) 0%, rgba(40,141,203,1) 5%, rgba(187,108,195,1) 44%, rgba(188,141,190,1) 62%, rgba(31,205,252,1) 95%, rgba(218,181,219,1) 100%, rgba(0,212,255,1) 100%)'
       ,zIndex:10,height:'300px'}}    
       />
       <ChannelCard channelDetail={channelDetail} marginTop='-110px'> </ChannelCard>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'100px'} }}></Box>
          <Videos videos={videos}></Videos>

        
      </Box>

    </Box>  
  )
}

export default ChannelDetail
