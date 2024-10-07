import React, { useState } from "react";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [params, setParams] = useState({
    username: "admin",
    password: "admin123",
    showPassword: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;

    setParams({
      ...params,
      [name]: value,
    });
  };

  const handleCheckbox = (e) => {
    let { name, checked } = e.target;

    setParams({
      ...params,
      [name]: checked,
    });
  };

  const handleSumbit = () => {
    //handle validation remember

    navigate("/admin/dashboard");
  };

  return (
    <div className="w-full h-screen bg-slate-700 flex flex-col justify-center items-center">
      <div className="w-4/12 flex flex-col justify-center items-center bg-slate-100 p-10 gap-4 rounded-lg">
        <h2 className="text-3xl font-medium text-center">Login</h2>
        <Input
          name="username"
          type="email"
          label="Username / Email"
          value={params.username}
          handleChange={handleChange}
        />
        <Input
          name="password"
          type={params.showPassword ? 'text' : 'password'}
          label="Password"
          value={params.password}
          handleChange={handleChange}
        />

        <div className="flex justify-between items-center w-full">
          <label className="text-sm flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              className="w-4 h-4"
              name="showPassword"
              checked={params.showPassword}
              onChange={handleCheckbox}
            />
            Show Password
          </label>

          <button
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            <p className="text-sm">Forgot password?</p>
          </button>
        </div>

        <PrimaryButton label="Login" onClick={handleSumbit} />
      </div>
    </div>
  );
};

export default Login;
