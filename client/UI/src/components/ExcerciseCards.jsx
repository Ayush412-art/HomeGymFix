import React from 'react'
import {Stack , Button , Typography , Box} from '@mui/material'
import { useNavigate } from 'react-router-dom';
function ExcerciseCards({data}) {

    const navigate = useNavigate();
  return (
    <>
      
        <Box sx={{textAlign : 'center'}} onClick = {() => (navigate(`/excercise/${data.id}`))}>

        <img src = {data.gifUrl} loading="lazy" height= '330px'  alt='image'></img>
        <Stack direction = 'row' spacing={2} sx={{my : '10px'}} >
        <Button size='small'  variant="contained" sx={{borderRadius : '20px' , color : 'white' , background : '#F29F58', ":hover" : {background : '#F26B0F'} }}>{data.bodyPart}</Button>
        <Button size='small' variant="contained" sx={{borderRadius : '20px' , color : 'white' , background : '#81BFDA' , ":hover" : {background : '#37AFE1'}}}>{data.target}</Button>
        
        </Stack>
        <Typography  sx={{fontSize : '1.3rem' }}>{data.name}</Typography>

        </Box>
      
    </>
  )
}

export default ExcerciseCards
