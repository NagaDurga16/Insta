import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { Grid} from "@mui/material";
import Paper from "@mui/material/Paper";

import { Route, Routes } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import Homedata from "./Homedata";
import Rightpage from "./Rightpage";
import Status from "./Status";
import Menu from "./Menu";
import InstagramView from "./InstagramView";
import Profile from "./Profile";

export default function Instagramreact() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Menu/>
        </Grid>
        <Grid item xs={10}>
        <Routes>
        <Route path="/" element={<InstagramView/>}></Route>
        <Route path="profile" element={<Profile/>}></Route>
       </Routes>
       </Grid>
      </Grid>
    </Box>
  );
}