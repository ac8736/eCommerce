import "./Footer.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ width: "70%", margin: "auto", marginTop: "2rem", textAlign: "center", height: 120 }} className="footer-container">
      <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", height: 60 }}>
        <Typography>Tech Heaven</Typography>
        <Typography>eCommerce App Demo</Typography>
        <Typography>Copyright © 2022 Tech Heaven</Typography>
      </Box>
    </Box>
  );
}
