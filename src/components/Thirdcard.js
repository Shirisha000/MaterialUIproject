import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Thirdcard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="500"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__cskIq6yG2kx6N6K5BDorP1t13iy0s5dFw&s"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Data Science
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Data science combines statistics, programming, and domain knowledge to
          extract meaningful insights from data. Developing data science skills
          helps students make data-driven decisions and solve real-world
          problems effectively
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
