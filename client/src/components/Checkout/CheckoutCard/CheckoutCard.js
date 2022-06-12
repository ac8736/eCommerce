import "./CheckoutCard.css";
import Headphone from "../../Home/PopularItems/PopularItemCard/headphones.png";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function CheckoutCard({ name, qty, price }) {
  return (
    <div>
      <Card raised width="80%" className="card-hover">
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src={Headphone} alt="headphone" height="80" width="150" />
        </CardContent>
        <CardContent sx={{ backgroundColor: "#63abeb" }}>
          <Typography variant="h6">{name}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>${price}</Typography>
            <Typography>Amt: {qty}</Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
