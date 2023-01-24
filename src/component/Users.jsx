import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

const Users = () => {
  const userDetails = useSelector((state) => state.userDetail.userDetails);

  return (
    <>
      <Grid
        sx={{
          display: "center",
          marginLeft: "auto",
          marginRight: "auto",
          width: "20%",
          paddingTop: "50px",
        }}
      >
        <Grid sx={{ marginRight: "10px" }}>
          <Button variant="contained" onClick={() => navigate("/")}>
            Back
          </Button>
        </Grid>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={userDetails.avatar}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {`${userDetails.first_name} ` + `${userDetails.last_name}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {userDetails.email}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default Users;
