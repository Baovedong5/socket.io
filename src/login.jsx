import "./login.scss";
import { useState } from "react";
import { callLogin } from "./api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await callLogin(email, password);

    console.log("res: ", res);

    if (res.data?.data) {
      localStorage.setItem("access_token", res.data.data.access_token);
    }
  };

  return (
    <div className="cover">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        autoComplete="true"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="password"
        autoComplete="true"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="login-btn" onClick={() => handleLogin()}>
        Login
      </button>
    </div>
  );
};

export default Login;
