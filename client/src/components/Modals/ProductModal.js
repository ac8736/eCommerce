import Modal from "@mui/material/Modal";
import { styles } from "./ProductModalStyles";
import { Typography, Box, IconButton, Button } from "@mui/material";
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useState } from "react";
import "./ProductModal.css";

export default function ProductModal({ open, modalClose, amt, setAmt }) {
  const imgPreviews = [
    "https://www.sony.com/image/8f499d4640b363762e66edd1a4916a10?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
    "https://m.media-amazon.com/images/I/71IHMdlbg5L._AC_SS450_.jpg",
    "https://source.unsplash.com/random/1200x800",
  ];

  const [selectedImg, setSelectedImg] = useState(imgPreviews[2]);

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
            Product Title
          </Typography>
          <div className="desc-container">
            <Typography variant="p" fontFamily="arial">
              Product description.Product description.Product description.Product description.Product description.Product
              description.
            </Typography>
          </div>
          <div className="images-containers">
            <img
              onClick={() => selectPreview(imgPreviews[0])}
              src={imgPreviews[0]}
              alt="product"
              style={styles.previewStyle}
              className="preview-hover"
            />
            <img
              onClick={() => selectPreview(imgPreviews[1])}
              src={imgPreviews[1]}
              alt="product"
              style={styles.previewStyle}
              className="preview-hover"
            />
            <img
              onClick={() => selectPreview(imgPreviews[2])}
              src={imgPreviews[2]}
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
