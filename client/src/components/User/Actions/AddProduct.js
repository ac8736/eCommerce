import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { styles } from "./AddProductStyles.js";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase.js";
import { useSelector } from "react-redux";

export default function AddProduct({ open, modalClose, productAdded }) {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState([]);
  const [productImage, setProductImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user.value);

  async function submitProduct() {
    setLoading(true);
    if (productImage.length > 3) {
      alert("You can only upload up to 3 images");
      return;
    } else if (productImage.length < 3) {
      alert("You must upload at 3 images");
      return;
    } else {
      for (let i = 0; i < productImage.length; i++) {
        const imageRef = ref(storage, `${user.email}/${productName}/${productImage[i].name}`);
        await uploadBytes(imageRef, productImage[i]);
        //console.log("finished uploading");
      }
      const imageArray = [];
      const response = await listAll(ref(storage, `${user.email}/${productName}`));
      //console.log("obtaining all");

      // await response.items.forEach((item) => {
      //   getDownloadURL(item).then((url) => imageArray.push(url));
      //   //console.log("retrieved urls");
      // });

      for (const item of response.items) {
        const url = await getDownloadURL(item);
        imageArray.push(url);
      }

      setImage(imageArray);
      //console.log("image links: " + image);
      if (image.length > 0) {
        await fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: productName,
            price: productPrice,
            description: productDescription,
            category: category,
            owner: user.email,
            image: image,
          }),
        });
        setLoading(false);
        modalClose();
        productAdded();
      } else {
        setLoading(false);
        alert("Error uploading images, please try again.");
      }
    }
  }

  return (
    <Modal open={open} onClose={() => modalClose()}>
      <Box sx={styles.modal}>
        {loading && (
          <Box sx={{ position: "absolute", zIndex: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress />
          </Box>
        )}
        <Box sx={styles.modalContentWrap}>
          <Typography variant="h4" component="h2">
            Add a Product
          </Typography>
          <Box sx={styles.modalContent}>
            <TextField
              sx={styles.textFieldStyle}
              variant="outlined"
              label="Product Name"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <TextField
              sx={styles.textFieldStyle}
              variant="outlined"
              label="Brief Product Description"
              type="text"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
            <TextField
              sx={styles.textFieldStyle}
              variant="outlined"
              label="Price"
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            <TextField
              sx={styles.textFieldStyle}
              variant="outlined"
              label="Category (Computers/Components/Peripherals)"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Box>
          <Typography variant="h4" component="h2">
            Upload Images
          </Typography>
          <label style={styles.labelStyle} id="files">
            Choose 3 images
          </label>
          <input style={styles.inputStyle} type="file" multiple onChange={(e) => setProductImage(e.target.files)} />
          <Button variant="contained" onClick={submitProduct}>
            Add
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
