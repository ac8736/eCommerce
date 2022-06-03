import { Drawer, Box, Typography } from "@mui/material";
import CartCards from "./CartContents/CartCards";

export default function CartDrawer({ drawerClose, open }) {
  return (
    <Drawer anchor={"right"} onClose={() => drawerClose()} open={open}>
      <Box sx={{ width: 400, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2rem" }}>
        <Typography variant="h2">Your Cart</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <CartCards />
          <CartCards />
          <CartCards />
        </Box>
      </Box>
    </Drawer>
  );
}
