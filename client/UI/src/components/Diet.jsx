import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import diet from '../assets/image/diet.jpg'
const Diet = () => {
  return (
   
    <Box component={"section"} 
     display={'flex'}
     alignItems={'center' } 
     justifyContent={'center'} 
     margin = '100px'>
        <Stack  flexDirection='row' sx={{ gap : '150px'}} >

            <Box>
               <img height={'370px'} width={'370px'} src ={diet} alt='image'></img>
            </Box>

            <Box>
                <Typography color={"#c62828"} fontWeight={'600'} fontSize={'1.5rem'}>Get your diet plan ready with <span style={{color : "orange"}}>AI</span></Typography>
                <Typography fontWeight={'400'} fontFamily={'Meriwether'} fontSize={'1.15rem'}>A diet plan is a structured approach to eating that helps individuals achieve <br/>their health and fitness goals. It outlines the type, quantity,<br/> and timing of food to consume daily, tailored to specific needs like weight management,<br/> muscle gain, or overall health improvement.</Typography>
                <Button variant='contained' 
                
                sx={{background : '#c62828' ,":hover":{background : '#e53935'},
                 maxWidth : {lg : '200px' , xs : '130px' } , marginTop : '15px'}}>Get your diet</Button>
            </Box>

        </Stack>
        
    </Box>

  )
}

export default Diet
