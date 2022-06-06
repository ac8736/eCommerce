import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState, useRef } from "react";
import { styles } from "./AddProductStyles.js";

export default function AddProduct({ open, modalClose }) {
  const files = useRef(null);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  function submitProduct() {
    if (files.current.files.length > 3) {
      alert("You can only upload up to 3 images");
      return;
    } else {
      alert("submitted");
      modalClose();
    }
  }

  return (
    <Modal open={open} onClose={() => modalClose()}>
      <Box sx={styles.modal}>
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
          </Box>
          <Typography variant="h4" component="h2">
            Upload Images
          </Typography>
          <label style={styles.labelStyle} id="files">
            Choose up to 3 images
          </label>
          <input style={styles.inputStyle} type="file" multiple ref={files} />
          <Button variant="contained" onClick={submitProduct}>
            Add
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
