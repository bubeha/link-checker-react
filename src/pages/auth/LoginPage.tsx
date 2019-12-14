import React from "react";

const LoginPage: React.FC = () => {

  return (
    <div>
      <h1>Login</h1>
      <form className="form">
        <div className="form__group">
          <label
            htmlFor="email"
            className="form__label"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form__input"
            required
          />
        </div>
        <div className="form__group">
          <label
            htmlFor="password"
            className="form__label"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            className="form__input"
            required
          />
        </div>
        <button
          className="btn btn--primary"
        >
          Login
        </button>
      </form>
    </div>
  )
};

export default LoginPage;
