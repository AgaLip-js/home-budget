import React from "react";
import axios from "axios";
import { Formik } from "formik";
import history from "../../templates/history";

import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const RegisterForm = ({ title }) => {
  return (
    <Formik
      initialValues={{ login: "", email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        //   return errors;
        if (!values.login) {
          errors.login = "Required";
        } else if (!/^[A-Z0-9._%+-]{2,}$/i.test(values.login)) {
          errors.login = "Invalid login";
        }
        if (!values.password) {
          errors.password = "Required";
        } else if (!/^[A-Z0-9._%+-]{2,}$/i.test(values.password)) {
          errors.password = "Invalid password";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          axios
            .post("http://localhost:4000/user/register", {
              login: values.login,
              email: values.email,
              password: values.password,
            })
            .then((res) => {
              if (res.data === "User already exist!") {
                console.log("User exists!");
                toast.error("User already exist!");
              } else {
                localStorage.setItem("token", res.token);
                resetForm({});
                toast.success("Register Successfully");
                history.push("/login");
              }
            })
            .catch((err) => toast.error(err));
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
        /* and other goodies */
      }) => (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-header">{title}</h2>
          <div className="form-control">
            <input
              className="login-inputUsername"
              type="text"
              name="login"
              id="login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.login}
            />
            <label htmlFor="login">Nazwa użytkownika</label>
            {errors.login && touched.login && errors.login}
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
            {errors.email && touched.email && errors.email}
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
            {errors.password && touched.password && errors.password}
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

export default RegisterForm;
