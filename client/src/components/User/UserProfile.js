import "./UserProfile.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import ProfileCard from "./Cards/ProfileCard";
import AddProduct from "./Actions/AddProduct";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UserProfile() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="profile-container">
      <div className="profile-info">
        <div className="profile">
          <Avatar alt="current user" sx={{ width: 124, height: 124 }} />
          <Typography variant="h5" sx={{ maxWidth: "400px", overflow: "clip" }}>
            Hello, USER
          </Typography>
          <Typography variant="p" fontFamily="arial">
            Email
          </Typography>
          <Typography variant="p" fontFamily="arial">
            Age
          </Typography>
        </div>
        <Button variant="contained" sx={{ maxWidth: "150px" }} onClick={() => setModalOpen(true)}>
          ADD PRODUCT
        </Button>
      </div>
      <div className="profile-products">
        <Typography variant="h4">Your Products</Typography>
        <Grid container spacing={2}>
          <Grid item xl={4}>
            <ProfileCard />
          </Grid>
          <Grid item xl={4}>
            <ProfileCard />
          </Grid>
          <Grid item xl={4}>
            <ProfileCard />
          </Grid>
          <Grid item xl={4}>
            <ProfileCard />
          </Grid>
          <Grid item xl={4}>
            <ProfileCard />
          </Grid>
        </Grid>
      </div>
      <AddProduct open={modalOpen} modalClose={() => setModalOpen(false)} />
    </div>
  );
}
