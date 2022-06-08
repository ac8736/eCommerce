import "./ProfileCard.css";
import { Card, CardContent, Typography, Button } from "@mui/material";
//import { useState } from "react";

export default function ProfileCard({ productName, price, img, productAdded }) {
  async function handleDelete() {
    await fetch("http://localhost:5000/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: productName,
        price: price,
        image: img,
      }),
    });
    productAdded();
  }

  return (
    <div>
      <Card raised width="80%">
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src={img} alt="headphone" height="80" width="150" />
        </CardContent>
        <CardContent sx={{ backgroundColor: "#63abeb" }}>
          <div className="profile-card-contents">
            <div>
              <Typography variant="h6">{productName}</Typography>
              <Typography>{`$${price}`}</Typography>
            </div>
            <div style={{ flexGrow: 1, textAlign: "center" }}>
              <Button variant="contained" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
