import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Box} from '@mui/material';
import {Navbar,ChannelDetail,Feed,SearchFeed,VideoDetail} from './components'

const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar> </Navbar>
      <Routes>
        <Route path="/" exact elemet={<Feed/>}></Route>
        <Route path="/video/:id" element={<VideoDetail/>}></Route>
        <Route path="/channel/:id" element={<ChannelDetail/>}></Route>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}></Route>
      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App
