import { Button, Grid, Paper } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ImageCarousel({images}) {


  const [index, setIndex] = useState(0);
  const leftHandler = () => {
    if (index === 0) {
      let slide = images.length - 1;
      setIndex(slide);
    } else {
      setIndex(index - 1);
    }
  };
  const rightHandler = () => {
    let slide = images.length - 1;
    if (index === slide) {
      let slider = 0;
      setIndex(slider);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <Paper>
      <Grid container>
        <Grid item xs={2}>
          <Button onClick={leftHandler}>
            <ArrowBackIosIcon />
          </Button>
        </Grid>
        <Grid item xs={8}>
            
                
          <img src={images[index]} style={{ maxWidth: 500 }} />
          
           
        </Grid>
        <Grid item xs={2}>
          <Button onClick={rightHandler}  style={{marginLeft:10}}>
            <ArrowForwardIosIcon />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}