import React from "react";
import Form from "../components/Form/Form";
import img from "../assets/pictures/undraw_welcome.svg";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Register = () => {
  return (
    <div className="login-wrapper">
      <Navbar />
      <div className="login-content">
        <img src={img} className="login-image" alt={img} />
        <Form secondary title="Zarejestruj się" />
      </div>
      <Footer />
    </div>
  );
};

export default Register;
