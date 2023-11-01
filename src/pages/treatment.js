import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./treatment.css"; // Import your custom CSS file

export default function Treatment() {
  return (
    <div className="container">
      <h1>Welcome to SymptoCare</h1>
      <p>
        SymptoCare is your trusted healthcare companion. Explore our services
        and features:
      </p>

      <div className="grid-container">
        <div className="grid-item">
          <h2>Symptoms Classifier</h2>
          <p>
            Use our advanced AI to classify your symptoms and get preliminary
            information about potential health issues.
          </p>
          <Link to="https://chat.openai.com/c/bb49b82d-6759-4be9-87d8-d740400c25af">
            <Button className="Button primary">Symptoms Classifier</Button>
          </Link>
        </div>

        <div className="grid-item">
          <h2>Treatment Recommendation</h2>
          <p>
            Get personalized treatment recommendations based on your symptoms and
            medical history.
          </p>
          <Link to="/treatment-recommendation">
            <Button className="Button primary">Treatment Recommendation</Button>
          </Link>
        </div>

        <div className="grid-item">
          <h2>Disease Information Search</h2>
          <p>Search for detailed information on various diseases and conditions.</p>
          <Link to="/disease-information-search">
            <Button className="Button primary">Disease Information Search</Button>
          </Link>
        </div>

        <div className="grid-item">
          <h2>Disease Spelling Correction</h2>
          <p>
            Correct common spelling errors in disease names for more accurate
            information.
          </p>
          <Link to="/disease-spelling-correction">
            <Button className="Button primary">Disease Spelling Correction</Button>
          </Link>
        </div>

        <div className="grid-item">
          <h2>Interactive Chat</h2>
          <p>Chat with our AI assistant to get instant answers to your queries.</p>
          <Link to="https://chat.openai.com/c/bb49b82d-6759-4be9-87d8-d740400c25af">
            <Button className="Button primary">Interactive Chat</Button>
          </Link>
        </div>

        <div className="grid-item">
          <Link to="/store">
            <Button className="Button success">Buy From Pharmacy</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
