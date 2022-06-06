export const styles = {
  modal: {
    display: "flex",
    gap: "40px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1050,
    height: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  },
  modalContentWrap: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
    gap: "20px",
  },
  modalContent: {
    display: "flex",
    flexDirection: "column",

    gap: "10px",
  },
  textFieldStyle: {
    width: "30vw",
  },
  labelStyle: {
    fontFamily: "arial",
  },
  inputStyle: {
    fontFamily: "arial",
    position: "relative",
    left: "42px",
  },
};
