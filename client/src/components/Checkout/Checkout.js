import { styles } from "./CheckoutStyles.js";
import CheckoutForm from "./Form/CheckoutForm";
import { Box, Grid, Typography } from "@mui/material";
import CheckoutCard from "./CheckoutCard/CheckoutCard";
import { useSelector } from "react-redux";

export default function Checkout() {
  const cart = useSelector((state) => state.cart);

  return (
    <Box sx={styles.checkoutContainer}>
      <Box sx={styles.checkoutCart}>
        <Typography variant="h5">Your Cart</Typography>
        <Grid container spacing={2}>
          <Grid item xl={4}>
            {/* <CheckoutCard name={item.name} price={item.price} images={item.image} description={item.description} /> */}
          </Grid>
        </Grid>
      </Box>
      <Box>
        <CheckoutForm />
      </Box>
    </Box>
  );
}
