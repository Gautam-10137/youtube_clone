import {useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import ReactPlayer from 'react-player'
import { Typography,Box,Stack } from '@mui/material';
import {CheckCircle} from '@mui/icons-material'
import {Loader, Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const {id}=useParams();
  const[videoDetail,setVideoDetail] =useState(null);
  const[videos,setVideos]=useState(null);

  useEffect(()=>{
    const fetchResults = async () => {
      const data = await fetchFromAPI(`videos?part=snippet,statistics&id=${id}`);

      if(data.items){
        setVideoDetail(data?.items[0]);
      }
      const videosData = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`);

      setVideos(videosData?.items);
  
    };

    fetchResults();
  },[id])
  if(!videoDetail?.snippet) return <Loader/>;
 const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=videoDetail;
  return (
    <Box minHeight='95vh'>
       <Stack 
       direction={{xs:'column',md:'row'}}
       >
        <Box flex={1}>
          <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}?modestbranding=1&playsinline=0&showinfo=0&enablejsapi=1&origin=https%3A%2F%2Fintercoin.org&widgetid=1`} className='react-player' controls origin='http://localhost:3000' />
             <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
              </Typography>
              <Stack  direction='row' justifyContent='space-between' sx={{color:'#fff'}} py={1} px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography sx={{color:'#fff'}}>
                      {channelTitle}
                      <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                  </Typography>
                </Link>
                <Stack direction='row' gap='20px' alignItems='center'>
                  <Typography variant='body1' sx={{opacity:0.7}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant='body1' sx={{opacity:0.7}}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1,xs:5}} justifyContent='center' alignItems='center'>
        <Videos videos={videos} direction='column'></Videos>

       </Box>
       </Stack>
       
    </Box>
  )
}

export default VideoDetail
