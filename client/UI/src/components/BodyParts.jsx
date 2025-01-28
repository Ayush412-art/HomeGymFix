
import {Card , CardContent,CardMedia,Typography} from '@mui/material';
import { useState } from 'react';
import Cardlogo from "../assets/image/cardlogo.png" 
export const Bodypart  = ({bodypartName})=>{
  const [selectedBodyPart , SetselectedBodyPart] = useState("");
  
  const handlerBodyParts = () =>{
   
    SetselectedBodyPart((prev)=>(prev === bodypartName ? null : bodypartName))
  }
     return(
        <>
           <Card  varient = "outline" sx={{ 
            width : "200px",
            pt:"20px",
            cursor : 'pointer',
            border : selectedBodyPart === bodypartName  ? '0.5px solid black' : ""
            }} 
            onClick = {(e) => handlerBodyParts(e)}
             > 
      <CardMedia
        sx={{ height: '100px', width: '100px' , mx: 'auto'}}
        image ={Cardlogo}
        title="green iguana"
      />
      <CardContent sx={{textAlign : 'center'}}>
       
        <Typography variant="body2" sx={{ color: "black" , fontSize : '1.2rem' }}>{bodypartName}
        </Typography>
      </CardContent>
      
    </Card>

        </>
     )
}