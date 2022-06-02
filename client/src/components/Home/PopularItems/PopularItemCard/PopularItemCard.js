import "./PopularItemCard.css";
import Headphone from "./headphones.png";
import ProductModal from "../../../Modals/ProductModal";
import { Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";

export default function PopularItemCard() {
  const [open, setOpen] = useState(false);
  const [amt, setAmt] = useState(0);

  function modalOpen() {
    setOpen(true);
  }
  function modalClose() {
    setAmt(0);
    setOpen(false);
  }

  return (
    <div>
      <Card raised width="80%" className="card-hover" onClick={modalOpen}>
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src={Headphone} alt="headphone" height="80" width="150" />
        </CardContent>
        <CardContent sx={{ backgroundColor: "#63abeb" }}>
          <Typography variant="h6">Headphones</Typography>
          <Typography>$100</Typography>
        </CardContent>
      </Card>
      <ProductModal open={open} modalClose={modalClose} amt={amt} setAmt={setAmt} />
    </div>
  );
}
