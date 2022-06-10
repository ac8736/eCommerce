import "./ProfileCard.css";
import { Card, CardContent, Typography, Button, CircularProgress } from "@mui/material";
import { deleteObject, ref, listAll } from "firebase/storage";
import { storage } from "../../../firebase.js";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function ProfileCard({ productName, price, img, productAdded }) {
  const user = useSelector((state) => state.user.value);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    setDeleting(true);
    await fetch("http://localhost:5000/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: productName,
        price: price,
        image: img,
      }),
    });
    const allPhotos = await listAll(ref(storage, `${user.email}/${productName}`));
    for await (const photo of allPhotos.items) {
      await deleteObject(photo);
    }
    productAdded();
  }

  return (
    <div>
      <Card raised width="80%">
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src={img} alt="headphone" height="80" width="150" />
        </CardContent>
        <CardContent sx={{ backgroundColor: "#63abeb" }}>
          <div className="profile-card-contents">
            <div>
              <Typography variant="h6">{productName}</Typography>
              <Typography>{`$${price}`}</Typography>
            </div>
            <div
              style={{
                flexGrow: 1,
                textAlign: "center",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" onClick={handleDelete}>
                Delete
              </Button>
              {deleting && <CircularProgress sx={{ width: "20px" }} />}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
