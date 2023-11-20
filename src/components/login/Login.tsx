import React, { useState, MouseEvent, FormEvent } from "react";
import LoginLogo from "../../assets/LoginLogo.png";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [idNumber, setIdNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const history = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (idNumber === "yourValidIDNumber" && password === "yourValidPassword") {
      // Successful login, no error message
      setError("");
      history("/dashboard");
    } else {
      // Invalid login, set the error message if both fields are not empty
      if (idNumber && password) {
        setError("Invalid ID Number or Password");
      } else {
        setError("Please enter ID Number and Password.");
      }
    }
  };

  return (
    <div className="loginContainer">
      <div className="logoContainer mainlogo">
        <img className="logo" src={LoginLogo} alt="Login Logo" />
      </div>
      <div>
        <form onSubmit={handleLogin}>
          <div className="form-container">
            <TextField
              id="input-with-icon-textfield"
              placeholder="ID Number"
              sx={{
                width: 300,
                marginBottom: 3,
                borderColor: "black",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
            />
          </div>
          <div className="form-container">
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              sx={{
                width: 300,
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="form-container loginbtncontainer">
            <button className="loginButton" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="fpContainer">
          <Link to="/forgot-password">
            <a className="forgotpass" href="/">
              Forgot Password?
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
