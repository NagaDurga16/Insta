import { Grid, Button } from "@mui/material";
import React, { useState } from "react";
export default function Comment() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const textHandler = (event, i) => {
    const value = event.target.value;
    setComment(event.target.value);
  };
  const commentHandler = () => {
    const newData = [...comments, comment];
    setComments(newData);
  };
  return (
    <Grid>
      <input
        type="text"
        placeholder="Add comment"
        style={{ width: 330, border: 0 }}
        onChange={textHandler}
      ></input>
      <Button onClick={commentHandler}>Add</Button>
      {comments.map((comment, i) => (
        <p key={"comment-" + i}>{comment}</p>
      ))}
    </Grid>
  );
}