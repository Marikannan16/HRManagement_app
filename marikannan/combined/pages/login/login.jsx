import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";
import img from "../../assets/screen.png";
import { login } from "../../features/logSlice";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { CiLock } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(true);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, error);

    if (!email || !password) {
      setError("Please fill the credential");
      return;
    }
  };

  const visiblePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showpassword);
  };
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className=" mt-2 mb-7 bg-gray-100 w-full lg:w-1/2">
          <img
            src={logo}
            className="mx-auto mt-5"
          />
          <br />
          <div className="max-w-sm mx-auto">
            <h4 className="text-left font-bold">Welcome to </h4>
            <h1 className="font-bold text-left text-md">ENCompliance HR</h1>
          </div>
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <br />
            <h3 className="text-left font-bold mt-2 text-md">Login</h3>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black-900 text-left"
            >
              Email ID
            </label>
            <div className="relative text-center">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" bg-white  text-black block flex-1 min-w-0 w-full text-sm  p-2.5 px-5 border border-black rounded-md"
                placeholder="Enter Your Email ID"
                required
              />
              <div
                className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <AiOutlineMail size={15} />
              </div>
            </div>
            <br />
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-black-900 text-left"
            >
              Password
            </label>
            <div className="relative text-center">
              <input
                type={showpassword ? "password" : "text"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" bg-white  text-black block flex-1 min-w-0 w-full text-sm  p-2.5 px-5 border border-black rounded-md"
                placeholder="Enter Your Password "
                required
              />

              <div
                className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <CiLock size={15} />
              </div>
              <div
                className="absolute inset-y-0 right-0 pr-3  
                    flex items-center  "
              >
                <button onClick={visiblePassword}>
                  {showpassword ? (
                    <VscEye className="text-black" />
                  ) : (
                    <VscEyeClosed className="text-black" />
                  )}
                </button>
              </div>
            </div>

            <br />
            <input
              type="submit"
              id="submit"
              value="Login"
              className="rounded rounded-e-lg bg-white-50  text-black block flex-1 min-w-0 w-full p-2.5 text-lg font-semibold "
              style={{ backgroundColor: "#D7B95F" }}
              required
            />
            <p className="text-center mt-2">Forget Password ?</p>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
        <div
          className="w-full lg:w-1/2 h-screen items-center text-center"
          style={{ backgroundColor: "#D7B95F" }}
        >
          <div className=" ">
            <img
              src={img}
              className="mx-auto mt-28"
              style={{ height: "340px" }}
            />
            <h4 className="font-bold text-md mt-12">
              Compliance Simplified , Results Amplified
            </h4>
            <p className="text-lg">
              Your trusted partners for seamless business compliance <br />
              and success
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
