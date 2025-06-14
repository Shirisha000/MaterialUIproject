import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Lastcard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="500"
        image="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsX29mZmljZV8zMV9waG90b19vZl95b3VuZ19naXJsX3dpdGhfc3R1ZGVudF9iYWNrcGFja19hbl82OWU5MGJmMC04OTRiLTQ3Y2QtOTlmNS1kZTBmZmU0MThiYWJfMS5wbmc.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          AI
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Artificial Intelligence is transforming education by personalizing
          learning experiences for every student. Embracing AI tools can help
          students unlock their full potential and prepare for the future.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
