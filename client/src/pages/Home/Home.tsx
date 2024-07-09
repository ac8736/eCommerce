import "./Home.css";
import { Link } from "react-router-dom";
import {
  IoHomeOutline,
  IoChatbubbleEllipsesOutline,
  IoCartOutline,
  IoHeartOutline,
  IoFileTrayFullOutline,
} from "react-icons/io5";

export function Home() {
  return (
    <div className="sound-bar">
      <Link to="/" className="link">
        <IoHomeOutline size={25} /> <span>Home</span>
      </Link>
      <Link to="/" className="link">
        <IoCartOutline size={25} /> <span>Cart</span>
      </Link>
      <Link to="/" className="link">
        <IoHeartOutline size={25} /> <span>Saved</span>
      </Link>
      <Link to="/" className="link">
        <IoFileTrayFullOutline size={25} /> <span>Purchase History</span>
      </Link>
      <Link to="/" className="link">
        <IoChatbubbleEllipsesOutline size={25} /> <span>Contact Us</span>
      </Link>
    </div>
  );
}
