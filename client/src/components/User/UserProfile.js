import "./UserProfile.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function UserProfile() {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <div className="profile">
          <Typography variant="h5" sx={{ maxWidth: "400px", overflow: "clip" }}>
            Hello, USER
          </Typography>
          <Typography variant="p" fontFamily="arial">
            Email
          </Typography>
          <Typography variant="p" fontFamily="arial">
            Age
          </Typography>
        </div>
        <Button variant="contained" sx={{ maxWidth: "150px" }}>
          ADD PRODUCT
        </Button>
      </div>
      <div className="profile-products">products</div>
    </div>
  );
}
