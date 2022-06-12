import "./ProductContents.css";
import PopularItemCard from "../../Home/PopularItems/PopularItemCard/PopularItemCard";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";

export default function ProductContents() {
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
    <div className="content-container">
      <Grid container spacing={2}>
        {itemsRetrieved &&
          items.map((item) => (
            <Grid item xl={12}>
              <PopularItemCard name={item.name} price={item.price} images={item.image} description={item.description} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
