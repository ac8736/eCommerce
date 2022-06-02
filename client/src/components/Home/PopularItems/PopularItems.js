import "./PopularItems.css";
import { Typography, Box, Grid } from "@mui/material";
import PopularItemCard from "./PopularItemCard/PopularItemCard";

export default function PopularItems() {
  return (
    <Box sx={{ width: "72%", margin: "auto", marginBottom: "3rem" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", borderBottom: "3px solid black", paddingLeft: "17px", marginTop: "5rem", marginBottom: "2rem" }}
      >
        Best Selling Products
      </Typography>
      <Grid container spacing={2}>
        <Grid item xl={3}>
          <PopularItemCard />
        </Grid>
        <Grid item xl={3}>
          <PopularItemCard />
        </Grid>
        <Grid item xl={3}>
          <PopularItemCard />
        </Grid>
        <Grid item xl={3}>
          <PopularItemCard />
        </Grid>
        <Grid item xl={3}>
          <PopularItemCard />
        </Grid>
        <Grid item xl={3}>
          <PopularItemCard />
        </Grid>
        <Grid item xl={3}>
          <PopularItemCard />
        </Grid>
        <Grid item xl={3}>
          <PopularItemCard />
        </Grid>
      </Grid>
    </Box>
  );
}
