import React , {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import { options , fetchData } from '../components/fetchData'
import { Box } from '@mui/material'
import ExcDetails from '../components/ExcDetails'
const  ExcerciseDescription = () => {
      const {id} = useParams();
      const [excerciseDetails , SetexcerciseDetails] = useState({});
      // const [equipmentExcercises , SetequipmentExcercises] = useState([]);
      // const [targetMuscles  , SettargetMuscles] = useState([])
      
      //fetching excercise details

      const FetchingDetails = async() =>{
          try{
            const excercisedetails = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}` , options);
            SetexcerciseDetails(excercisedetails);           
           
       
          }
          catch(err){
            console.error(err.message);
            
          }
      }
      //fetching target muscles details --- 
      // const FetchingTargetDetails = async() =>{
      //   try{
      //     console.log(excerciseDetails.target);
      //         const targetData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${excerciseDetails.target}` , options);
      //         console.log(targetData);
      //         SettargetMuscles(targetData)
      //   }
      //   catch(error){
      //     console.error("Fetal error : " , error.message)
      //   }
      // }
      // // fetching equipment details ----
      // const FetchingEquipmentDetails = async() =>{
      //   try{

      //         const equipmentData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${excerciseDetails.equipment}` , options)
      //         SetequipmentExcercises(equipmentData);
      //   }
      //   catch(error){
      //     console.error("Fetal error : " , error.message)
      //   }
      // }

      useEffect(()=>{
        FetchingDetails();
      } , [id])

    

  return (
    <Box>
        <ExcDetails exeDetails = {excerciseDetails} />
          <MoreExcercises equipmentExcercises = {equipmentExcercises} targetMuscles = {targetMuscles}/>
    </Box>
  )
}

export default ExcerciseDescription
