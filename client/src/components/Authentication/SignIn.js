import "./SignIn.css";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SignIn() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAcc, setNewAcc] = useState(false);

  function handleSubmit() {
    console.log(firstName, lastName, email, password);
  }

  return (
    <div className="signin-container">
      <Container>
        <div className="signin-contents">
          <Typography variant="h4" className="signin-title">
            {newAcc ? "Register" : "Sign In"}
          </Typography>
          {newAcc ? (
            <>
              <TextField
                variant="outlined"
                label="First Name"
                sx={{ width: "30%" }}
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                variant="outlined"
                label="Last Name"
                sx={{ width: "30%" }}
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                variant="outlined"
                label="Age"
                sx={{ width: "30%" }}
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </>
          ) : null}
          <TextField
            variant="outlined"
            label="Email"
            sx={{ width: "30%" }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Password"
            sx={{ width: "30%" }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" sx={{ marginTop: "1rem" }} onClick={handleSubmit}>
            Submit
          </Button>
          <Button onClick={() => setNewAcc((prev) => !prev)}>
            {newAcc ? "Already have an account? Sign in here." : "No account? Register here."}
          </Button>
        </div>
      </Container>
    </div>
  );
}
