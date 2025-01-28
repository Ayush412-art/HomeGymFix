
import {Stack} from "@mui/material"
import {NavLink} from "react-router-dom"
import Logo from "../assets/image/gymlogo.png"
export  const Navbar = () => {
  return (
    <div >
      <Stack direction={'row'} justifyContent={'space-around'} sx={{gap : {sm :'130px'  }, mt : {sm : '20px'  } , visibility : {xs : 'hidden'  , sm : 'visible'}}}>
      <NavLink exact to={'/'}>
        <img style={{height:"150px", width:"150px"}} 
        src={Logo} alt='GymLogo'></img>
      </NavLink>
     
      <Stack direction={'row'} gap={'20px'} alignItems={'center'} fontSize={'1.5rem'} >
        <NavLink  to={'/'} className={"nav"}>Home</NavLink>
        <NavLink  to={'/About'} className={"nav"} >About</NavLink>
        <NavLink  to={'/Excercises'} className={"nav"}>Excercises</NavLink>
      </Stack>
      </Stack>
    </div>
  )
}


