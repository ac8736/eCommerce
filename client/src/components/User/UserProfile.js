import "./UserProfile.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import ProfileCard from "./Cards/ProfileCard";
import AddProduct from "./Actions/AddProduct";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

export default function UserProfile() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [userItems, setUserItems] = useState([]);
  const [productAdded, setProductAdded] = useState(false);
  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.user.value);

  async function getUserItems() {
    try {
      const response = await fetch("http://localhost:5000/products");
      if (response.status === 200) {
        const products = await response.json();
        const userProducts = [];
        products.forEach((element) => {
          if (element.owner === user.email) {
            userProducts.push(element);
          }
        });
        setUserItems(userProducts);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.loggedIn === false) {
      navigate("/");
    } else {
      getUserItems();
    }
  }, [user.loggedIn, navigate, productAdded]);

  return (
    <div className="profile-container">
      <div className="profile-info">
        <div className="profile">
          <Avatar alt="current user" sx={{ width: 124, height: 124 }} />
          <Typography variant="h5" sx={{ maxWidth: "400px", overflow: "clip" }}>
            Hello, {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="p" fontFamily="arial">
            Email: {user.email}
          </Typography>
          <Typography variant="p" fontFamily="arial">
            Age: {user.age}
          </Typography>
        </div>
        <Button variant="contained" sx={{ maxWidth: "150px" }} onClick={() => setModalOpen(true)}>
          ADD PRODUCT
        </Button>
      </div>
      <div className="profile-products">
        <Typography variant="h4">Your Products</Typography>

        <Grid container spacing={2}>
          {!loading ? (
            userItems.length === 0 ? (
              <Typography>No Products Available.</Typography>
            ) : (
              userItems.map((item) => (
                <Grid item xl={4} id={item._id}>
                  <ProfileCard
                    productName={item.name}
                    price={item.price}
                    img={item.image[0]}
                    productAdded={() => setProductAdded((prev) => !prev)}
                  />
                </Grid>
              ))
            )
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </div>
      <AddProduct open={modalOpen} modalClose={() => setModalOpen(false)} productAdded={() => setProductAdded((prev) => !prev)} />
    </div>
  );
}
