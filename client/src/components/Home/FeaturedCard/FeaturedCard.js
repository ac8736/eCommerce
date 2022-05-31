import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./FeaturedCard.css";

export default function FeaturedCard({ title, product, imgSrc, children }) {
  return (
    <Card raised sx={{ width: "70%", margin: "auto", height: 400, borderRadius: "15px" }} className="background">
      <CardContent sx={{ display: "flex" }}>
        <Box>
          <Typography variant="h2" fontFamily="monospace" position="absolute" zIndex={2} fontWeight="bold">
            {title}
          </Typography>
          <img className="featureItemPos" src={imgSrc} alt="featured item" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h2" gutterBottom align="right" fontFamily="monospace" overflow="hidden">
            {product}
          </Typography>
          <Typography paragraph align="right" fontFamily="monospace" fontWeight="bold" paddingLeft="12rem" overflow="hidden">
            <br />
            {children}
          </Typography>
          <Button variant="contained" size="small" sx={{ width: "20%", marginBottom: "auto", marginLeft: "auto" }}>
            Shop
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
