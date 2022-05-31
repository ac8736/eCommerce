import { AiOutlineShoppingCart } from "react-icons/ai";
import Badge from "@mui/material/Badge";

export default function ShoppingCart({ width, height, count }) {
  return (
    <Badge badgeContent={count} color="primary">
      <AiOutlineShoppingCart style={{ width: width, height: height }} />
    </Badge>
  );
}
