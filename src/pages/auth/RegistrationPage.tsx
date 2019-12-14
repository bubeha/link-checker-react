import React from "react";

const RegistrationPage: React.FC = () => (
  <div>
    <h1>Registration</h1>
    <form className="form">
      <div className="form__group">
        <label
          htmlFor="full_name"
          className="form__label"
        >
          Full Name:
        </label>
        <input
          id="full_name"
          name="full_name"
          className="form__input"
          required
        />
      </div>
      <div className="form__group">
        <label
          htmlFor="email"
          className="form__label"
        >
          Email:
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
          Password:
        </label>
        <input
          id="password"
          name="password"
          className="form__input"
          required
        />
      </div>
      <div className="form__group">
        <label
          htmlFor="password_confirm"
          className="form__label"
        >
          Password Confirm:
        </label>
        <input
          id="password_confirm"
          name="password_confirm"
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
);

export default RegistrationPage;
