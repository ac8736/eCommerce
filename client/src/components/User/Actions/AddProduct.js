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
      for await (const img of productImage) {
        const imageRef = ref(storage, `${user.email}/${productName}/${img.name}`);
        await uploadBytes(imageRef, img);
      }
      const imageArray = [];
      const response = await listAll(ref(storage, `${user.email}/${productName}`));
      console.clear();
      for await (const item of response.items) {
        const url = await getDownloadURL(item);
        imageArray.push(url);
        console.log(imageArray);
      }

      if (imageArray.length > 0) {
        try {
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
              image: imageArray,
            }),
          });
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
        setLoading(false);
        modalClose();
        productAdded();
      } else {
        setLoading(false);
        alert("Error uploading images, please try again.");
      }
    }
  }
  const inputContents = [
    { label: "Product Name", type: "text", value: productName, onChange: (e) => setProductName(e.target.value) },
    {
      label: "Brief Product Description",
      type: "text",
      value: productDescription,
      onChange: (e) => setProductDescription(e.target.value),
    },
    { label: "Price", type: "number", value: productPrice, onChange: (e) => setProductPrice(e.target.value) },
    {
      label: "Category (Computers/Components/Peripherals)",
      type: "text",
      value: category,
      onChange: (e) => setCategory(e.target.value),
    },
  ];
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
            {inputContents.map((input) => (
              <TextField
                sx={styles.textFieldStyle}
                variant="outlined"
                label={input.label}
                type={input.type}
                value={input.value}
                onChange={input.onChange}
              />
            ))}
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
