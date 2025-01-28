import React , {useState} from 'react'
import {Stack , Typography , Pagination} from '@mui/material'
import ExcerciseCards from './ExcerciseCards'
function Results({excercises}) {

  const excercisePerpage = 9;
  const [currentpage , setCurrentpage]  = useState(1);
  const indexOflastExcercises = currentpage * excercisePerpage;
  const indexOffirstExcercises  =  indexOflastExcercises - excercisePerpage;

  const currExcercises = excercises.slice(indexOffirstExcercises , indexOflastExcercises );
  
  const paginate = (e ,value) =>{
        setCurrentpage(value);
        window.scrollTo({top : 500 , behavior : 'smooth'})
  }
  
  return (
    <>
    <Typography variant='h4'>Showing Results</Typography>
    <Stack flexWrap = 'wrap'  spacing={{lg : '5' , sm : '3' }}  direction={{sm : 'column' , lg : 'row'}} sx={{gap : {lg : '100px' , sm : '60px'} , justifyContent : 'center' , alignItems : 'center' , my : '25px'}} >
       {
      
        currExcercises.map((value , index) => (
          <ExcerciseCards data = {value} key={index}  />
        ))
       }
    </Stack>

    
   <Stack mt={'50px'} alignItems={'center'}>
    {
      excercises.length > 9 && (
        <Pagination shape='rounded' count={Math.ceil(excercises.length / excercisePerpage)} page={currentpage} onChange={paginate} defaultPage={1}  />  
      )
    }
   
   </Stack>
    </>
  )
}

export default Results
