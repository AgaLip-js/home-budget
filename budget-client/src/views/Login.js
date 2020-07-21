import React from "react";
import img from "../assets/pictures/undraw_sign_in.svg";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import LoginForm from "../components/Form/LoginForm";

const Login = ({ setAuth }) => {
  return (
    <div className="login-wrapper">
      <Navbar />
      <div className="login-content">
        <img src={img} className="login-image" alt={img} />
        <LoginForm title="Zaloguj się" setAuth={setAuth} />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
