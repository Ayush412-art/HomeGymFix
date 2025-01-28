
import { Typography , Stack , TextField ,Button, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchData  , options } from '../components/fetchData';
import Horizontal from '../components/HorizontalScrollingBar';
import { createContext } from 'react';
import Results from '../components/Results';

export const myContext = createContext(null);
const SearchExcercies = () =>{
const [search , setSearch] = useState("");
const [excercises , setExcercises] = useState([]);
const [bodyPart , SetbodyPart] =  useState([]);

const handlerSearch = async()=>{
  if(search){
    const res = await fetchData("https://exercisedb.p.rapidapi.com/exercises", options);
    const SearchedExcercises = res.filter(
      (data) => data.name.toLowerCase().includes(search) 
      || data.target.toLowerCase().includes(search)
      || data.bodyPart.toLowerCase().includes(search)
      || data.equipment.toLowerCase().includes(search)
    )
    //alert for empty response ------
    if(SearchedExcercises.length < 1){
      alert("Results not found! ");
    }
    setExcercises(SearchedExcercises);
      
  }
}
// default value for excercises hook-----

const fetchDefaultData = async() =>{
  try{
    const defaultRes = await fetchData("https://exercisedb.p.rapidapi.com/exercises", options)
    setExcercises(defaultRes.filter((data) => data.target.includes("arms")))
  }
  catch(err){
    console.log(err);

  }
}

const searchBodyParts = async() =>{
  try{
    const result = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList' , options)
    SetbodyPart(result);
    
  }
  catch(err){
    console.log(err);
  }
  
}
useEffect(()=>{
  fetchDefaultData();
   searchBodyParts();
}, [])



return(
<Stack alignItems = "center" justifyContent = "center" >
    <Typography fontFamily='Meriwether' textAlign={'center'} sx={{fontSize : {lg : '2.5rem', md : '1.8rem' }, my : '30px' } }> Explore more <span style={{color : '#FF6500'}} >excercises <br/> by searching</span>   </Typography>
    <Box sx={{display  : "flex", gap :{lg: "10px" , md : "12px"} }}>

    <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="search"
        onChange={(e) => (setSearch(e.target.value.toLowerCase()))}
        sx={{
          height : {lg: 60, md: 50, sm: 40, xs: 30},
          '& .MuiOutlinedInput-root': {
            height: '100%', 
            padding: 0, 
          },
          '& .MuiInputBase-input': {
            padding: '10px 14px', 
          },
        borderRadius : '40px'
        }}
      />
  <Button variant='contained'
  
        sx = {{
          height : {lg: 60, md: 50, sm: 40, xs: 30},
          background: '#c62828',
          ":hover" : {background: '#e53935'},
          
        
        }}
        onClick={()=>{handlerSearch()}}
  >
    Search
  </Button>
    </Box>
    <Box sx={{position : 'relative' , width : '100%' , p : "10px"}}>
      <myContext.Provider value ={{bodyPart }}>
          <Horizontal  />
          

      </myContext.Provider>
          
        </Box>

        <Results excercises = {excercises}/>

</Stack>

)
}
export default SearchExcercies;