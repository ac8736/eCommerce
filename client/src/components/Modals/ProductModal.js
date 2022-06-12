import Modal from "@mui/material/Modal";
import { styles } from "./ProductModalStyles";
import { Typography, Box, IconButton, Button } from "@mui/material";
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useState } from "react";
import "./ProductModal.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart";

export default function ProductModal({ open, modalClose, amt, setAmt, images, name, description }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [selectedImg, setSelectedImg] = useState(images[0]);

  function addCount() {
    setAmt((prev) => prev + 1);
  }

  function removeCount() {
    if (amt > 0) setAmt((prev) => prev - 1);
  }

  function selectPreview(img) {
    setSelectedImg(img);
  }

  function handleClick() {
    const payload = { productName: name, qty: amt };
    dispatch(addToCart(payload));

    modalClose();
  }

  return (
    <Modal open={open} onClose={() => modalClose()}>
      <Box sx={styles.modal}>
        <Box sx={styles.modalContent}>
          <img src={selectedImg} alt="product" style={styles.imageStyle} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" component="h2">
            {name}
          </Typography>
          <div className="desc-container">
            <Typography variant="p" fontFamily="arial">
              {description}
            </Typography>
          </div>
          <div className="images-containers">
            <img
              onClick={() => selectPreview(images[0])}
              src={images[0]}
              alt="product"
              style={styles.previewStyle}
              className="preview-hover"
            />
            <img
              onClick={() => selectPreview(images[1])}
              src={images[1]}
              alt="product"
              style={styles.previewStyle}
              className="preview-hover"
            />
            <img
              onClick={() => selectPreview(images[2])}
              src={images[2]}
              alt="product"
              style={styles.previewStyle}
              className="preview-hover"
            />
          </div>
          <Box sx={styles.inputStyle}>
            <IconButton onClick={removeCount}>
              <MdOutlineRemoveShoppingCart style={{ width: 40, height: 25 }} />
            </IconButton>
            <Box sx={styles.entryStyle}>
              <Typography sx={{ margin: "none", padding: "none" }}>{amt}</Typography>
            </Box>
            <IconButton onClick={addCount}>
              <MdAddShoppingCart style={{ width: 40, height: 25 }} />
            </IconButton>
          </Box>
          <Button variant="contained" onClick={handleClick}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
