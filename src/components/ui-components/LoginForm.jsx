import React from "react";
import TextField from "../ui-elements/TextField";
import Button from "../ui-elements/Button";
import { Link } from "react-router-dom";

function LoginForm({ handleLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onChange = (e, id) => {
    if (id === "email") {
      setEmail(e.target.value);
    } else if (id === "password") {
      setPassword(e.target.value);
    }
  };

  const loginUser = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter valid email");
      return;
    }

    handleLogin({ email, password });
  };

  return (
    <div className="login-form-container">
      <div>
        <div className="mandali-regular text-color-white align-center login-text ">
          Login
        </div>
      </div>
      <div>
        <TextField
          parentClassName="align-center"
          className="text-field text-field-primary"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => onChange(e, "email")}
        />

        <TextField
          parentClassName="align-center"
          className="text-field text-field-primary"
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => onChange(e, "password")}
        />

        <div className="align-center">
          <Button value="Login" onClick={loginUser} className={"btn-primary"} />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
