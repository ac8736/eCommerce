import "./PopularItems.css";
import { Typography, Box, Grid } from "@mui/material";
import PopularItemCard from "./PopularItemCard/PopularItemCard";
import { useEffect, useState } from "react";

export default function PopularItems() {
  const [itemsRetrieved, setItemsRetrieved] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const jsonData = await fetch("http://localhost:5000/products");
      const data = await jsonData.json();
      setItems(data);
    }
    getItems();
    console.log(items);
    setItemsRetrieved(true);
  }, []);

  return (
    <Box sx={{ width: "72%", margin: "auto", marginBottom: "3rem" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", borderBottom: "3px solid black", paddingLeft: "17px", marginTop: "5rem", marginBottom: "2rem" }}
      >
        Best Selling Products
      </Typography>
      <Grid container spacing={2}>
        {itemsRetrieved &&
          items.map((item) => (
            <Grid item xl={3}>
              <PopularItemCard name={item.name} price={item.price} description={item.description} images={item.image} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
