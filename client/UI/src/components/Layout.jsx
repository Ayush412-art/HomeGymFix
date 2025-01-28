
import { Box ,Typography,Stack ,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import poster from '../assets/image/poster.png'
const Layout = () => {
const navigate = useNavigate();
  return (
    <>
    <Box sx={{width : {lg : '80%' , sm : '100%'} , mx : 'auto', gap : '1rem' , display : {lg : 'flex' , sm : 'grid'} ,justifyContent: {sm : 'center'}} }>
        <Stack  my={'auto'} p={'25px'} sx={{gap : {lg :'23px'  , xs : '18px'}}} >

            <Typography color={"#c62828"} fontWeight={'600'} fontSize={'1.5rem'}>Welcome to HomeGymFix , </Typography>
            <Typography fontWeight={'400'} fontFamily={'Meriwether'} fontSize={'1.15rem'}>Working out is a natural mood enhancer, proven to reduce stress, anxiety, and depression. By incorporating exercise into your daily routine, you'll experience improved mental well-being and a greater sense of happiness </Typography>
            <Button onClick={() => (navigate('/Excercises'))} variant='contained' sx={{background : '#c62828' ,":hover":{background : '#e53935'}, maxWidth : {lg : '200px' , xs : '130px'}}}>Explore Excercises</Button>
        </Stack>
        <Stack sx={{maxWidth : '400px' , objectFit : 'cover' ,width : {lg : '80%' , sm : '100%'} , height : 'auto' }}>
            <img src={poster}></img>
        </Stack>
    </Box>
        <hr/>
    
    
    </>
  )
}

export default Layout;
