import { Box,Grid } from "@mui/material";
import React from "react";
import Homedata from "./Homedata";
import Rightpage from "./Rightpage";
import Status from "./Status";
import { Grade } from "@mui/icons-material";
export default function InstagramView(){
    return(
        <Box>
            <Grid container spacing={2}>
             <Grid item xs={9}>
          <Status/>
          
          <Homedata />
        </Grid>
        <Grid item xs={3}>
          <Rightpage/>
        </Grid>
        </Grid>
        </Box>

    )

}