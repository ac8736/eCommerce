import "./PopularItemCard.css";
import Headphone from "./headphones.png";
import { Card, CardContent, Typography } from "@mui/material";

export default function PopularItemCard() {
  return (
    <Card raised width="80%" className="card-hover">
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img src={Headphone} alt="headphone" height="80" width="150" />
      </CardContent>
      <CardContent sx={{ backgroundColor: "#63abeb" }}>
        <Typography variant="h6">Headphones</Typography>
        <Typography>$100</Typography>
      </CardContent>
    </Card>
  );
}
