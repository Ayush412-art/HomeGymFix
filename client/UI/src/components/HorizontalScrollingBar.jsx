import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Bodypart } from "../components/BodyParts";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { myContext } from "../pages/Excercises";

const Horizontal = () => {
  const  {bodyPart } = useContext(myContext)
 

  const LeftArrow = () => {
    const { useIsVisible, scrollPrev } = useContext(VisibilityContext);
   
    const isFirstItemVisible = useIsVisible("first", true);

    return (
      <Typography
        disabled={isFirstItemVisible}
        onClick={() => {
          scrollPrev();
        }}
        className="left"
      >
        <FaArrowLeftLong style={{ height: "25px", width: "30px" }} />
      </Typography>
    );
  };

  const RightArrow = () => {
    const { useIsVisible, scrollNext } = useContext(VisibilityContext);
    
    const isLastItemVisible = useIsVisible("last", false);

    return (
      <Typography
        disabled={isLastItemVisible}
        onClick={() => {
          scrollNext();
        }}
        className="right"
      >
        <FaArrowRightLong style={{ height: "25px", width: "30px" }} />
      </Typography>
    );
  };

  return (
    <div style={{ margin: "30px" }}>
      <Typography
        sx={{
          fontSize: { lg: "2rem", md: "1.5rem", sm: "1rem" },
          fontFamily: "Capriola",
          color: "#e53935",
        }}
      >
        Choose your category here
      </Typography>

      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {bodyPart ? bodyPart.map((value) => (
          <Box
            key={value.id || value}
            title={value.id || value}
            sx={{
              p: 3,
              m: "0 20px",
              color: "primary.contrastText",
              borderRadius: 1,
            } }
          >

                <Bodypart bodypartName={value} />
            
          </Box>
        )) : <h2>Loading....</h2>}
      </ScrollMenu>
    </div>
  );
};
export default Horizontal;
