import React, { useState } from "react";
import * as Components from "../styles/ForgotPasswordComp";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";

function ForgotPassword() {
  const navigate = useNavigate();
  const [signIn, toggle] = useState(true);
  const [forget, setForget] = useState({
    username: "",
    password: ""
  });

  const handleForget = async (e) => {
    e.preventDefault();
    const { username, password } = forget;

    try {
      await axios.put(`http://localhost:8080/update/${password}/${username}`);
      toast.success("Password Reset Successful", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
      });
      navigate('/login');
    } catch (error) {
      toast.error("Password Reset Failed", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
      });
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Reset Password</Components.Title>
            <br />
            <Components.Title1>ResetCode:</Components.Title1>
            <br />
            <Components.Input type="text" placeholder="Enter Your Code Here" required />
            <br />
            <Components.Title1>Password:</Components.Title1>
            <br />
            <Components.Input type="text" placeholder="Enter Your Password Here" required />
            <br />
            <Components.Title1>RepeatAgain:</Components.Title1>
            <br />
            <Components.Input type="email" placeholder="Re-Enter Your Password Here" required />
            <br />

            <Components.Button onClick={() => navigate('/signin')}>Reset</Components.Button>
            <br />
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form className="forgot-container">
            <Components.Title>Forgot Password?</Components.Title>
            <br />
            <Components.Title1>Username:</Components.Title1>
            <br />
            <Components.Input
              type="email"
              placeholder="Enter Your Username Here"
              required
              value={forget.username}
              onChange={(e) => setForget({ ...forget, username: e.target.value })}
            />
            <br />
            <Components.Title1>New Password:</Components.Title1>
            <br />
            <Components.Input
              type="password"
              placeholder="Enter Your New Password Here"
              required
              value={forget.password}
              onChange={(e) => setForget({ ...forget, password: e.target.value })}
            />
            <br />
          </Components.Form>
        </Components.SignInContainer>

        <div className="overlay">
        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Wanna Re-check or Change Your Details</Components.Title>
              <Components.Paragraph>
                Make Sure The Details You Give Are Correct
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Back to Forgot Page
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Once You Enter The Details Click Verify</Components.Title>
              <Components.Paragraph>Your Password Will Be Re-set</Components.Paragraph>
              <Components.GhostButton  onClick={handleForget}>Reset Password</Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
        </div>
      </Components.Container>
    </motion.div>
  );
}

export default ForgotPassword;