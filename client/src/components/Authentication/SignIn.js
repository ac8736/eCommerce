import "./SignIn.css";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/user";

export default function SignIn() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAcc, setNewAcc] = useState(false);

  const dispatch = useDispatch();

  function resetFields() {
    setFirstName("");
    setLastName("");
    setAge("");
    setEmail("");
    setPassword("");
  }

  async function handleSubmit() {
    if (newAcc) {
      try {
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            password: password,
          }),
        });
        navigate("/");
        dispatch(
          login({
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            loggedIn: true,
          })
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      const users = await fetch("http://localhost:5000/users");
      const usersJSON = await users.json();
      const user = usersJSON.find((element) => element.email === email);

      if (user && user.password === password) {
        navigate("/");
        dispatch(
          login({
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            email: user.email,
            loggedIn: true,
          })
        );
      } else {
        setPassword("");
        alert("Incorrect email or password");
      }
    }
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
