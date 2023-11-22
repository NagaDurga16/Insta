import { Box, Button, Grid, List, ListItem, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";

import PropTypes from "prop-types";
import PortraitIcon from '@mui/icons-material/Portrait';
import { initializeUseSelector, useSelector } from "react-redux/es/hooks/useSelector";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

    return(
        
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  
  export default function Profile() {
   const Posts = useSelector((state) => state.post.POSTS);
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      (CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      }),
      (
        <Grid>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <img
                style={{
                  width: 140,
                  height: 100,
                  borderRadius: 50,
                }}
                src="https://www.momjunction.com/wp-content/uploads/2015/04/Top-188-Latest-And-Modern-Hindu-Baby-Girl-Names1-910x1024.jpg"
              />
              
               
            </Grid>
            <Grid item xs={1}>
              <Typography>KotaNagaDurga</Typography>
              <Typography style={{ marginTop: 60 }}>{Posts.length} posts</Typography>
              <Typography style={{ marginTop: 40 }}> NagaDurgaKota</Typography>
            </Grid>
            <Grid item xs={2}>
              <Button style={{ background: "#D7DEE9", color: "black" }}>
                Edit Profile
              </Button>
              <Typography style={{ marginTop: 50 }}>1kfollowers</Typography>
            </Grid>
            <Grid item xs={2}>
              <Button style={{ background: "#D7DEE9", color: "black" }}>
                View Archive
              </Button>
              <Typography style={{ marginTop: 50 }}>76 following</Typography>
            </Grid>
            <Grid item xs={1}>
              <SettingsIcon fontSize="large" />
            </Grid>
          </Grid>
          <p style={{marginLeft:200}}>Turning my dreams 😴into my vision👀 and my vision into reality🌍😊.....!</p>
          <Grid container>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example" style={{marginLeft:400}}
                >
                  <Tab label="POST" {...a11yProps(0)} />
                  <Tab label="SAVED" {...a11yProps(1)} />
                  <Tab label="TAGGED" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <div style={{marginLeft:300}}>
              <CustomTabPanel value={value} index={0}>
               <Box>
               <div style={{ display: "flex", flexWrap: "wrap", width: 500 }}>
               {Posts.map(({images}, i) => (
               <List>
                 <ListItem><img src={images} style={{width:100}}/></ListItem>
                 </List>
                  ))}
                   </div>
               </Box>
              
               </CustomTabPanel>
                                <CustomTabPanel value={value} index={1} style={{ display: "flex", justifyContent: "center", margin: 0 }}>
                                    <h1 style={{ marginLeft: "-70px" }}>No saved posts</h1>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={2} style={{ display: "flex", justifyContent: "center", margin: 0 }}>
                                    <PortraitIcon style={{ height: "70px", width: "70px", borderRadius: "50%" }} />
                                    <h1 style={{ marginLeft: "-70px" }}>Photos of you</h1>
                                </CustomTabPanel>
              </div>
            </Box>
            <footer style={{ display: "flex", justifyContent: "space-around", fontSize: 10, marginTop: "250px" }}>

<ul>Meta</ul>
<ul>About</ul>
<ul>Blog</ul>
<ul>Jobs</ul>
<ul>Help</ul>
<ul>API</ul>
<ul>Privacy</ul>
<ul>Terms</ul>
<ul>Locations</ul>
<ul>Instagram Lite</ul>
<ul>Threads</ul>
<ul>Contact Uploading & Non-Users</ul>
<ul>Meta Verified</ul>


</footer>
          </Grid>
        </Grid>
      )
    );
  }
