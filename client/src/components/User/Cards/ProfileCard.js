import "./ProfileCard.css";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useState } from "react";

export default function ProfileCard() {
  return (
    <div>
      <Card raised width="80%">
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src="https://source.unsplash.com/random/1200x800" alt="headphone" height="80" width="150" />
        </CardContent>
        <CardContent sx={{ backgroundColor: "#63abeb" }}>
          <div className="profile-card-contents">
            <div>
              <Typography variant="h6">Headphones</Typography>
              <Typography>$100</Typography>
            </div>
            <div style={{ flexGrow: 1, textAlign: "center" }}>
              <Button variant="contained">Delete</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
