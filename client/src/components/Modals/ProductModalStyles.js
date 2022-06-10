export const styles = {
  modal: {
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
    borderRadius: "10px",
  },

  modalContent: {
    display: "flex",
    flexDirection: "column",
  },

  imageStyle: {
    width: 450,
    height: 450,
    borderRadius: "10px",
  },

  previewStyle: {
    width: 100,
    height: 100,
    borderRadius: "10px",
    boxShadow: "0px 0px 4px #000",
  },

  inputStyle: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    justifyContent: "space-evenly",
  },

  entryStyle: {
    width: 300,
    textAlign: "center",
    backgroundColor: "lightGray",
    fontFamily: "monospace",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
};
