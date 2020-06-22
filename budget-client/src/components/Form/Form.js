import React from "react";

const Form = ({ secondary, title }) => {
  return (
    <form className="login-form">
      <h2 className="login-header">{title}</h2>
      <div className="form-control">
        {secondary && (
          <>
            <input
              className="login-inputUsername"
              type="text"
              name="username"
              id="username"
              required
            />
            <label htmlFor="email">Nazwa użytkownika</label>
          </>
        )}
        <input
          className="login-inputEmail"
          type="email"
          name="email"
          id="email"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          className="login-inputPassword"
          type="password"
          name="password"
          id="password"
          required
        />
        <label htmlFor="password">Hasło</label>
      </div>
      <button type="submit" className="login-submitBtn">
        Zatwiedź
      </button>
    </form>
  );
};

export default Form;
