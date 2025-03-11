/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      onLogin(true);
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <form
      className="w-50 m-auto d-flex flex-column align-items-center bg-light p-5 rounded-5 shadow-lg"
      onSubmit={handleSubmit}
    >
      <fieldset className="border border-2 p-4 rounded-4 w-100">
        <legend className="text-center text-white bg-primary p-2 rounded-3 fw-bold fs-3 shadow-sm">
          🌟 Login to Your Account 🌟
        </legend>

        <div className="mb-4 w-100">
          <label className="form-label fw-bold text-dark" htmlFor="username">
            Username:
          </label>
          <input
            className="form-control border-2 rounded-3 p-2"
            type="text"
            id="username"
            placeholder="Enter a username"
            autoComplete="on"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            style={{ borderColor: "#ff6b6b", backgroundColor: "#ffe4e1" }}
          />
        </div>

        <div className="mb-4 w-100">
          <label className="form-label fw-bold text-dark" htmlFor="password">
            Password:
          </label>
          <input
            className="form-control border-2 rounded-3 p-2"
            type="password"
            id="password"
            placeholder="Enter a password"
            autoComplete="off"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            style={{ borderColor: "#ff6b6b", backgroundColor: "#ffe4e1" }}
          />
        </div>

        <div className="d-grid gap-2 w-100">
          <button
            className="btn fw-bold text-white p-2 rounded-4"
            type="submit"
            style={{
              backgroundColor: "#FF004D",
              boxShadow: "0 4px 15px rgba(255, 107, 107, 0.3)",
            }}
          >
            🚀 Login
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Login;
