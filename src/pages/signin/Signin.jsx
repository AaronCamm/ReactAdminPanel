import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../config";
import img from "../../img/Logo-NoIcon.png";
import "./Signin.scss";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Signin = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      navigate("/dashboard");
    }
  }, [user, loading]);

  return (
    <div className="signInContainer">
      <div className="loginContainer">
        <div className="logoContainer">
          <img src={img} className="logo" alt="logo" />
        </div>
        <p className="getStarted">Let's get started!</p>
        <p className="loginMessage">Login to continue</p>
        <form className="formField">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="button"
            value="Login"
            className="button"
            onClick={() =>
              logInWithEmailAndPassword(email, password).then((bool) =>
                setOpen(!bool)
              )
            }
          />
        </form>
        <div className="forgotPassword">
          <a href="forgot-password">Forgot password?</a>
        </div>
        <hr />
        <div className="signUp">
          <p>Need an account?</p>
          <a href="signup">Sign Up</a>
        </div>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Incorrect login details
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    </div>
  );
};

export default Signin;
