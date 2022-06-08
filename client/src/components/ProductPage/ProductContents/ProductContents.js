import "./ProductContents.css";
import PopularItemCard from "../../Home/PopularItems/PopularItemCard/PopularItemCard";
import Grid from "@mui/material/Grid";
import { listAll, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../firebase";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ProductContents() {
  const [itemsRetrieved, setItemsRetrieved] = useState(false);
  const [items, setItems] = useState([]);

  const user = useSelector((state) => state.user.value);

  async function getItems() {
    listAll(ref(storage, `${user.email}`)).then((res) => {
      console.log(res);
    });
  }

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
