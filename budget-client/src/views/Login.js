import React from "react";
import img from "../assets/pictures/undraw_sign_in.svg";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Navbar from "../components/Navbar/Navbar";

const Login = () => {
  return (
    <div className="login-wrapper">
      <Navbar />
      <div className="login-content">
        <img src={img} className="login-image" alt={img} />
        <Form title="Zaloguj się" />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
