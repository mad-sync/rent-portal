import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";

const ForgotPassword = () => {

  const navigate = useNavigate();

  const [params, setParams] = useState({
    username: "admin@rent.com",
    showPassword: false,
  });

  const handleSubmit = () => {
    navigate('/reset-password')
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    setParams({
      ...params,
      [name]: value,
    });
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-700">
      <div className="flex flex-col w-4/12 gap-4 bg-slate-100 p-10 rounded">
        <h1 className="text-3xl font-medium text-center">Forgot Password</h1>
        <Input
          type="text"
          name="username"
          label="Username / Email"
          value={params.username}
          handleChange={handleChange}
        />
        <PrimaryButton label="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default ForgotPassword;
