import React from 'react'
import { Typography , Stack , Box } from '@mui/material'
import Logo from "../assets/image/gymlogo.png"
function ExcDetails({exeDetails}) {
    const {gifUrl , name, bodyPart , target , equipment , instructions } = exeDetails;
    
    
    const extraDetails = [
        {
            title : bodyPart,
            icon : Logo
        },
        {
            title : target,
            icon : Logo

        },
        {
            title : equipment,
            icon : Logo

        }
    ]

  return (
    <Box display={'flex'} justifyContent={'center'}>
        <Stack maxWidth={'80%'} gap={'100px'} sx={{flexDirection: {lg: 'row'} , p : '20px' , alignItems : 'center' , justifyContent : 'center'}}>
        <img height={'400px'} width={'400px'} src={gifUrl} loading='lazy' alt='excercise-gif'></img>
        <Stack sx={{gap: {lg : '35px' , xs : '20px'}}} >
        <Typography variant='h4'>{name}</Typography>
       <Typography  fontWeight={'400'} fontFamily={'Meriwether'} fontSize={'1.15rem'}>{instructions}</Typography>
       
            {
                extraDetails.map((item) => (
                        <Stack key={item.name} direction={'row'} alignItems={'center'} gap= '10px'>
                            <img  height={'70px'} width={'70px'}  src={item.icon}></img>
                            <Typography variant='h6' >{item.title}</Typography>

                            </Stack>
                ))
            }
       
        </Stack>

        </Stack>
       

    </Box>
  )
}

export default ExcDetails
