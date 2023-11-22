import { Grid, Box, collapseClasses } from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Comment from "./Comment";
import { useSelector, useDispatch } from 'react-redux';
import ImageCarousel from "./ImageCarousel";
import { createPost, updatePost } from "./Postslicer";




export default function Homedata() {
  const Posts = useSelector((state) => state.post.POSTS);
  
  const dispatch = useDispatch();
  const likeHandler = (event, index) => {
   let count=Posts[index].like_count ?? 0;
   count += 1;
  
   event.preventDefault();
   dispatch(updatePost({like_count:count,index}));
  }

  
  return (
    <Grid style={{ borderLeft: "1px solid grey" }}>
      <Grid style={{ paddingLeft: 100, paddingRight: 100 }}>
        {Posts.map(({ author,caption,images,like_count}, i) => (
          <Card sx={{ maxWidth: 700, marginTop: 5 ,marginLeft:10}}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  <img style={{ width: 40, borderRadius: 50 }} src="https://www.momjunction.com/wp-content/uploads/2015/04/Top-188-Latest-And-Modern-Hindu-Baby-Girl-Names1-910x1024.jpg" />
                </Avatar>
              }
              title={author}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
         <ImageCarousel images={images}/>
            {/* <CardMedia
              component="img"
              height="400"
              width="500"
              
              image={<ImageCarousel/>}
            /> */}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {caption}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <FavoriteIcon
                 color={""}
                 onClick={(e) => likeHandler(e, i)}
                  
                />
              </IconButton>
              <p>{like_count}Likes</p>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ChatBubbleOutlineIcon />
              </IconButton>
              <IconButton aria-label="share" style={{ paddingLeft: 540 }}>
                <TurnedInNotIcon />
              </IconButton>
            </CardActions>
            <Comment />
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}