import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Secondcard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="500"
        image="https://e7.pngegg.com/pngimages/601/22/png-clipart-graduation-ceremony-student-business-school-graduate-university-student-people-phd.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cloud skills
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Mastering cloud skills is essential for today’s tech professionals,
          enabling seamless access to scalable computing resources. Cloud
          expertise empowers students to innovate and build solutions without
          infrastructure limitations.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
