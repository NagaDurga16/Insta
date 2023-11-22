import { Grid, Box, Typography, colors } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
export default function Rightpage() {
  const suggest = [
    {
      image:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSNpShDfLR5wn9S2oCXnjmS96vZuyTc6NShqxKqhdS7eHo73UCK1Qn6xWDDtSMdVId9bM9TqT4SKMWD0tI",
      content: "Alia Bhat",
      flag: "Follow",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMmNkNGIyMjEtZDJkNy00ZTBkLTg3MWUtMDBjM2ZmZGMyYTVlXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_FMjpg_UX1000_.jpg",
      content: "Teja",
      flag: "Follow",
    },
    {
      image:
        "https://images.firstpost.com/wp-content/uploads/2016/10/keerthy-suresh-380.jpg?impolicy=website&width=1200&height=900",
      content: "Lavanya",
      flag: "Follow",
    },
    {
      image: "https://static.toiimg.com/photo/88239805.cms",
      content: "Sai",
      flag: "Follow",
    },
    {
      image:
        "https://images.firstpost.com/wp-content/uploads/2016/10/keerthy-suresh-380.jpg?impolicy=website&width=1200&height=900",
      content: "Sony",
      flag: "Follow",
    },
  ];
  return (
    <Grid>
      <Grid style={{ display: "flex" }}>
        <Grid>
          <img
            style={{ width: 40, borderRadius: 50 }}
            src="https://www.momjunction.com/wp-content/uploads/2015/04/Top-188-Latest-And-Modern-Hindu-Baby-Girl-Names1-910x1024.jpg"
          />
        </Grid>
        <Grid style={{ marginTop: -35, paddingLeft: 10, display: "flex" }}>
          <p>
            <h4>Kota Naga Durga</h4>
            <Typography style={{ color: "grey" }}>Naga Durga Kota</Typography>
          </p>
          <p style={{ paddingLeft: 80, paddingTop: 40, color: "blue" }}>
            {" "}
            switch
          </p>
        </Grid>
      </Grid>
      <Grid>
        <Grid style={{ display: "flex" }}>
          <p>Suggested for you</p>
          <p style={{ paddingLeft: 130 }}>see all</p>
        </Grid>
        <Grid>
          {suggest.map(({ image, content, flag }, i) => (
            <Box sx={{ display: "flex" }}>
              <p>
                <img
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 50,
                  }}
                  src={image}
                />
              </p>
              <p style={{ marginTop: -1, paddingLeft: 10 }}>
                <p> {content}</p>
                <p style={{ color: "grey" }}>follows you</p>
              </p>
              <p style={{ paddingLeft: 100, paddingTop: 20 }}>{flag}</p>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}