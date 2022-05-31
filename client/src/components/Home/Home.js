import "./Home.css";
import FeaturedCard from "./FeaturedCard/FeaturedCard";
import PopularItems from "./PopularItems/PopularItems";
import Keyboard from "./FeaturedCard/featureKeyboard.png";

export default function Home() {
  return (
    <div className="home-container">
      <FeaturedCard title={"Featured Product"} product={"Mechanical Backlit Keyboard"} imgSrc={Keyboard}>
        Perfect for long term use, this keyboard is made of durable plastic and quality components.
      </FeaturedCard>
      <PopularItems />
      <FeaturedCard title={"30% Discount"} product={"Mechanical Backlit Keyboard"} imgSrc={Keyboard}>
        Perfect for long term use, this keyboard is made of durable plastic and quality components.
      </FeaturedCard>
    </div>
  );
}
