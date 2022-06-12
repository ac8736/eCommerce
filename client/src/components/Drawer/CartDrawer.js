import { Drawer, Box, Typography, Button } from "@mui/material";
import CartCards from "./CartContents/CartCards";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartDrawer({ drawerClose, open }) {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <Drawer anchor={"right"} onClose={() => drawerClose()} open={open}>
      <Box sx={{ width: 400, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2rem" }}>
        <Typography variant="h2">Your Cart</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "1rem" }}>
          {cart.value.items.map((item) => (
            <CartCards key={item.productName} name={item.productName} />
          ))}
        </Box>
        {cart.value.items.length > 0 ? (
          <Button
            variant="contained"
            sx={{ marginTop: "3rem" }}
            onClick={() => {
              drawerClose();
              navigate("/checkout");
            }}
          >
            CHECKOUT
          </Button>
        ) : (
          <Typography>No Items in Cart!</Typography>
        )}
      </Box>
    </Drawer>
  );
}
