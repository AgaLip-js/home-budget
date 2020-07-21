import React from "react";
import img from "../assets/pictures/undraw_welcome.svg";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import RegisterForm from "../components/Form/RegisterForm";

const Register = () => {
  return (
    <div className="login-wrapper">
      <Navbar />
      <div className="login-content">
        <img src={img} className="login-image" alt={img} />
        <RegisterForm title="Zarejestruj się" />
      </div>
      <Footer />
    </div>
  );
};

export default Register;
