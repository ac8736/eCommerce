import "./ProductContents.css";
import PopularItemCard from "../../Home/PopularItems/PopularItemCard/PopularItemCard";
import Grid from "@mui/material/Grid";

export default function ProductContents() {
  return (
    <div className="content-container">
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
    </div>
  );
}
