import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { List, ListItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch} from 'react-redux';
import { useState } from "react";
import { createPost } from "./Postslicer";
import { Link } from "react-router-dom";
export default function Menu() {
  const[author,setAuthor]=useState("");
  const[images,setImage]=useState([]);
  const[caption,setCaption]=useState("");
  const [list,setList]=useState([]);
  const[like,setLike]=useState(0);
  const dispatch = useDispatch();

  const postHandler= (e) => {
    e.preventDefault();
    dispatch(createPost({author,images,caption,like}));
    
  };
const submitHandler =()=>{
let img=[...images,list];
setImage(img);

}


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid style={{ position: "sticky", top: 0 }}>
      <svg
        aria-label="Instagram"
        class="_ab6-"
        color="rgb(0, 0, 0)"
        fill="rgb(0, 0, 0)"
        height="29"
        role="img"
        viewBox="32 4 113 32"
        width="103"
      >
        <path
          clip-rule="evenodd"
          d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
          fill="currentColor"
          fill-rule="evenodd"
        ></path>
      </svg>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon fontSize="large" />
            </ListItemIcon>
            <Link to="/" style={{textDecoration:"none"}}>
            <ListItemText primary="Home" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ExploreIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img
                style={{ width: 30 }}
                src="data:image/png;base64,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"
              />
            </ListItemIcon>
            <ListItemText primary="Reels" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img
                style={{ width: 30 }}
                src="data:image/png;base64,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"
              />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteBorderIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton  onClick={handleOpen}>
            <ListItemIcon>
              <AddCircleOutlineIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>



          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Paper style={{ margin: "100px 500px 0 500px" ,textAlign:"center"}}>
              <h4>Create Post</h4>
              <InputLabel style={{}}>Author</InputLabel>
              <Input onChange={(e)=>setAuthor(e.target.value)}/>
              <InputLabel>Image</InputLabel>
              <Input onChange={(e)=>setList(e.target.value)}/>
              <Button onClick={submitHandler}>Submit</Button>
              {images.map((images,i)=>(
              <List>
                <ListItem>{images}</ListItem>
              </List>
              ))}
              <InputLabel>Caption</InputLabel>
              <Input onChange={(e)=>setCaption(e.target.value)}/>
             <p>
              <Button
                style={{ marginBottom: 20 }} onClick={postHandler}
              >
               ADDPOST 
              </Button>
              </p>
            </Paper>
        </Modal>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img
                style={{ width: 40, borderRadius: 50 }}
                src="https://www.momjunction.com/wp-content/uploads/2015/04/Top-188-Latest-And-Modern-Hindu-Baby-Girl-Names1-910x1024.jpg"
              />
            </ListItemIcon>
            <Link to="profile" style={{textDecoration:"none"}}>
            <ListItemText primary="Profile" />
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DensityMediumIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="More" />
          </ListItemButton>
        </ListItem>
      </List>
    </Grid>
  );
}