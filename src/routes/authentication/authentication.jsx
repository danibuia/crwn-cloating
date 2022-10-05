import React from "react";
import SignUpForm from "../../components/sing-up-form/sign-up-form.component";
import SignInForm from "../../components/sing-in-form-copy/sign-in-form.component";
import './authentication.scss'

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
