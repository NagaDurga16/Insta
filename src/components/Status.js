import React, { useState } from "react";

import { Grid, Box } from "@mui/material";
const STATUS = [
  {
    image:
      "https://static.toiimg.com/thumb/msid-87470911,width-1280,resizemode-4/87470911.jpg",
    title: "Pawan kalyan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1630304565761-d6f8d5a0facd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3V0ZSUyMGJhYnl8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    title: "Siva",
  },
  {
    image:
      "https://www.momjunction.com/wp-content/uploads/2015/04/Top-188-Latest-And-Modern-Hindu-Baby-Girl-Names1-910x1024.jpg",
    title: "Tulasi",
  },
  {
    image:
      "https://static.toiimg.com/thumb/msid-87470911,width-1280,resizemode-4/87470911.jpg",
    title: "Ganesh",
  },
  {
    image:
      "https://images.news18.com/ibnlive/uploads/2021/11/baby-boy-163729885616x9.jpg?impolicy=website&width=1200&height=675",
    title: "Vinay",
  },
  {
    image:
      "https://static.toiimg.com/thumb/msid-87470911,width-1280,resizemode-4/87470911.jpg",
    title: "Minnu",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm27I7n1vS9zhe0UPX_kZp2Dnx2XPAdlWQ8VOiqzOCt3p2VcODxLtqUivO3hiLJN7jVzQ&usqp=CAU",
    title: "Chinnu",
  },
];

export default function Status() {
  //  const [status, setStatus] = useState(STATUS);

  return (
    <Grid style={{ borderLeft: "1px solid grey" }}>
      <Grid style={{ display: "flex", paddingRight: 60, paddingLeft: 60 }}>
        {" "}
        {STATUS.map(({ image, title }, i) => (
          <Box sx={{ paddingLeft: 1, paddingRight: 1 }}>
            <p>
              <img
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 50,
                  border: "3px solid red",
                }}
                src={image}
              />
            </p>
            <p> {title}</p>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}