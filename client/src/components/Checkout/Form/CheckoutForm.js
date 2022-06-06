import { styles } from "./CheckoutFormStyles.js";
import { Box, Typography, TextField, Input, Button } from "@mui/material";

export default function CheckoutForm() {
  return (
    <Box sx={styles.formContainer}>
      <Typography variant="h5">Checkout</Typography>
      <TextField label="Full Name" type="text" />
      <TextField label="Street Address" type="text" />
      <Box>
        <TextField label="State" type="text" sx={{ marginRight: "10px" }} />
        <TextField label="Zip" type="text" />
      </Box>
      <TextField label="Email" type="text" />
      <TextField label="Phone Number" type="text" />
      <Typography variant="h5">Payment Information</Typography>
      <Input placeholder="Card Information" type="text" />
      <Box>
        <Input placeholder="CVV" type="text" sx={{ marginRight: "60px" }} />
        <Input placeholder="Expiration Date (MM/YYYY)" type="text" />
      </Box>
      <Button variant="contained">Purchase</Button>
    </Box>
  );
}
