import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useState } from "react";

export default function CartCards() {
  const [amt, setAmt] = useState(0);
  function addCount() {
    setAmt((prev) => prev + 1);
  }

  function removeCount() {
    if (amt > 0) setAmt((prev) => prev - 1);
  }
  return (
    <Card sx={{ width: "350px", display: "flex", alignItems: "center" }}>
      <img src="https://source.unsplash.com/random/1200x800" width="150" height="100" alt="items" />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <Typography variant="p" fontFamily={"arial"}>
          Headphones
        </Typography>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IconButton onClick={removeCount}>
            <MdOutlineRemoveShoppingCart style={{ width: 35, height: 20 }} />
          </IconButton>
          <Typography sx={{ margin: "none", padding: "none" }}>{amt}</Typography>
          <IconButton onClick={addCount}>
            <MdAddShoppingCart style={{ width: 35, height: 20 }} />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}
