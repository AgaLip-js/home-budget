import React from "react";
import axios from "axios";
import { Formik } from "formik";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const LoginForm = ({ title, setAuth }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          axios
            .post("http://localhost:4000/user/login", {
              email: values.email,
              password: values.password,
            })
            .then(({ data }) => {
              if (data.token) {
                localStorage.setItem("token", data.token);
                setAuth(true);
                toast.success("Logged in Successfully");
              } else {
                setAuth(false);
                toast.error(data);
              }
            })
            .catch((err) => {
              console.log("error");
              alert(err);
            });
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-header">{title}</h2>
          <div className="form-control">
            <input
              className="login-inputEmail"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <label htmlFor="email">Email</label>
            <input
              className="login-inputPassword"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <label htmlFor="password">Hasło</label>
          </div>
          <button
            type="submit"
            className="login-submitBtn"
            disabled={isSubmitting}
          >
            Zatwiedź
          </button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
