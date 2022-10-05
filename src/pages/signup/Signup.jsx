import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../../config";
import img from "../../img/Logo-NoIcon.png";
import "./Signup.scss";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Signup = () => {
  const [open, setOpen] = React.useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [severity, setSeverity] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      navigate("/signin");
    }
  }, [user, loading]);

  return (
    <div className="signUpContainer">
      <div className="loginContainer">
        <div className="logoContainer">
          <img src={img} className="logo" alt="logo" />
        </div>
        <p className="getStarted">Let's get started!</p>
        <p className="loginMessage">
          Fill in the form below to create a new account
        </p>
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
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            type="button"
            value="Signup"
            className="button"
            onClick={function () {
              if (password === confirmPassword) {
                registerWithEmailAndPassword(email, password)
                  .then((response) => {
                    setSeverity("success");
                    setErrorMsg("Successfully Sign Up");
                    setOpen(true);
                  })
                  .catch((err) => {
                    setSeverity("error");
                    setErrorMsg(
                      err.message
                        .replace("Firebase: ", "")
                        .replace(" (auth/weak-password)", "")
                    );
                    setOpen(true);
                  });
              } else {
                setSeverity("error");
                setErrorMsg("Password do not match!");
                setOpen(true);
              }
            }}
          />
        </form>
        <div className="signIn">
          <p>Already have an account?</p>
          <a href="signin">Sign In</a>
        </div>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity={severity}
              sx={{ width: "100%" }}
            >
              {errorMsg}
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    </div>
  );
};

export default Signup;
