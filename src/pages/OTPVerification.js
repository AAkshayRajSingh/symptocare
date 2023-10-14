import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import "/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/pages/OPTVerification.css";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function validateForm() {
    return otp.length === 4; // Assuming OTP is 4 digits
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (otp === "0000") {
      // Successful OTP verification, navigate to the store
      navigate("/store");
    } else {
      setError("Incorrect OTP. Please try again.");
    }
  }

  return (
    <div className="OTPVerification">
      <Form onSubmit={handleSubmit}>
        <h2>OTP Verification</h2>
        <p>Please check your email for the OTP.</p>
        <Form.Group controlId="otp">
          <Form.Label>Enter OTP</Form.Label>
          <Form.Control
            autoFocus
            type="password" // Use password type to hide characters
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </Form.Group>
        {error && <div className="error-message">{error}</div>}
        <Button
          variant="primary"
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          Verify OTP
        </Button>
        <div className="login-link">
          Already registered? <Link to="/login">Login</Link>
        </div>
      </Form>
    </div>
  );
}
