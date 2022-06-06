import { styles } from "./CheckoutStyles.js";
import CheckoutForm from "./Form/CheckoutForm";
import { Box, Grid, Typography } from "@mui/material";
import CheckoutCard from "./CheckoutCard/CheckoutCard";

export default function Checkout() {
  return (
    <Box sx={styles.checkoutContainer}>
      <Box sx={styles.checkoutCart}>
        <Typography variant="h5">Your Cart</Typography>
        <Grid container spacing={2}>
          <Grid item xl={4}>
            <CheckoutCard />
          </Grid>
          <Grid item xl={4}>
            <CheckoutCard />
          </Grid>
          <Grid item xl={4}>
            <CheckoutCard />
          </Grid>
          <Grid item xl={4}>
            <CheckoutCard />
          </Grid>
          <Grid item xl={4}>
            <CheckoutCard />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <CheckoutForm />
      </Box>
    </Box>
  );
}
