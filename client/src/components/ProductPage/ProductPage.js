import "./ProductPage.css";
import Filter from "./Filter/Filter";
import ProductContents from "./ProductContents/ProductContents";

export default function ProductPage() {
  return (
    <div className="productpage-container">
      <Filter />
      <ProductContents />
    </div>
  );
}
