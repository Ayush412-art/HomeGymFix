import { Box , Typography} from "@mui/material"

const Music = () => {


  return (
    <>
    
    <Box sx={{width : {lg : '80%' , sm: '100%'} , mx :'auto', mt : {lg :'80px' ,sm : '100px' }, p: '28px' ,textAlign:'center', display:'grid' , gap:'20px'}}>
    <Typography color={"#c62828"} fontWeight={'600'} fontSize={'1.5rem'}>Wanna start with some music ?  </Typography>
    <iframe
        style={{ borderRadius: '15px 50px', border:'none ' ,background : "#c62828" }}
        src="https://open.spotify.com/embed/playlist/1O5KjC59jSY8K7RGJLOC2t?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

    </Box>
    
    
    </>
    
  )
}

export default Music;
