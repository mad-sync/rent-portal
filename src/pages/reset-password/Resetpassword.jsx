import React, { useState } from "react";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Resetpassword = () => {
  const [params, setParams] = useState({
    password: '',
    confirm_password: '',
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


  const handleSumbit = () => {
    //handle validation remember

    navigate("/login");
  };

  return (
    <div className="w-full h-screen bg-slate-700 flex flex-col justify-center items-center">
      <div className="w-4/12 flex flex-col justify-center items-center bg-slate-100 p-10 gap-4 rounded-lg">
        <h2 className="text-3xl font-medium text-center">Reset Password</h2>
        <Input
          name="password"
          type="password"
          label="Password"
          value={params.password}
          handleChange={handleChange}
        />
        <Input
          name="confirm_password"
          type="confirm_password"
          label="Confirm Password"
          value={params.confirm_password}
          handleChange={handleChange}
        />


        <PrimaryButton label="Reset Password" onClick={handleSumbit} />
      </div>
    </div>
  );
};

export default Resetpassword;
