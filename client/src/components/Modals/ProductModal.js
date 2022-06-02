import Modal from "@mui/material/Modal";
import { Typography, Box, IconButton, Button } from "@mui/material";
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useState } from "react";
import "./ProductModal.css";

export default function ProductModal({ open, modalClose, amt, setAmt }) {
  const style = {
    display: "flex",
    gap: "40px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1050,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const modalContent = {
    display: "flex",
    flexDirection: "column",
  };

  const imageStyle = {
    width: 500,
    height: 500,
  };

  const inputStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    justifyContent: "space-evenly",
  };

  const entryStyle = {
    width: 300,
    textAlign: "center",
    backgroundColor: "lightGray",
    fontFamily: "monospace",
    paddingTop: "5px",
    paddingBottom: "5px",
  };

  function addCount() {
    setAmt((prev) => prev + 1);
  }
  function removeCount() {
    if (amt > 0) setAmt((prev) => prev - 1);
  }

  return (
    <Modal open={open} onClose={() => modalClose()}>
      <Box sx={style}>
        <Box sx={modalContent}>
          <img src="https://source.unsplash.com/random/1200x800" alt="product" style={imageStyle} />
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
          <Box sx={inputStyle}>
            <IconButton onClick={removeCount}>
              <MdOutlineRemoveShoppingCart style={{ width: 40, height: 25 }} />
            </IconButton>
            <Box sx={entryStyle}>
              <Typography sx={{ margin: "none", padding: "none" }}>{amt}</Typography>
            </Box>
            <IconButton onClick={addCount}>
              <MdAddShoppingCart style={{ width: 40, height: 25 }} />
            </IconButton>
          </Box>
          <Button variant="contained">Add to Cart</Button>
        </Box>
      </Box>
    </Modal>
  );
}
