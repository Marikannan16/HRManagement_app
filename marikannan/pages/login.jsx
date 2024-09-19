import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import logo from "./logo.png";
import img from "./carosual.png";
import { login } from "../feature/logSlice";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { CiLock } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import Carousel from "./Carousel";
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
    dispatch(login({ email, password }));
    setEmail("");
    setPassword("");
    setError("");
  };

  const visiblePassword = (e) => {
    e.preventDefault();

    setShowPassword(!showpassword);
  };
  const slides = [img, img, img];
  return (
    <div className="">
      <div className="grid grid-col-1 gap-2 lg:grid-cols-2 ">
        <div className="rounded px-14 py-5 bg-gray-100 order-1 lg:order-2">
          <div className="brand flex items-center max-w-sm mx-auto">
            <img src={logo} className="logo" />
            <h5 className="text-center ms-4 text-sm font-bold">
              ENCOMPLIANCE HR
            </h5>
          </div>
          <br />
          <br />
          <div className="max-w-sm mx-auto justify-start ">
            <h4 className="text-left">Welcome to </h4>
            <h1 className="font-bold text-left ">ENCompliance HR</h1>
          </div>
          <br />
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <h3 className="text-left mb-2">Login</h3>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black-900 text-left"
            >
              Email ID
            </label>
            {/* <div className="flex bg-white border border-e-0 border-black rounded-md">
              <span className="inline-flex items-center px-3 text-sm text-white-900 bg-transparent">
                <AiOutlineMail />
              </span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" bg-transparent border-none text-black block flex-1 min-w-0 w-full text-sm p-2.5"
                placeholder="Enter Your Email ID"
                required
              />
            </div>
            <br /> */}
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
            {/* <div className="relative text-center">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" bg-white  text-black block flex-1 min-w-0 w-full text-sm  p-2.5 px-5 border border-black rounded-md"
                placeholder="Enter Your Password"
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
                className="absolute inset-y-0 left-80 pl-3  
                    flex items-end"
              >
                <button onClick={visiblePassword}>
                  {showpassword ? <VscEye /> : <VscEyeClosed />}
                </button>
              </div>
            </div>
            <br /> */}
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
                  {showpassword ? <VscEye /> : <VscEyeClosed />}
                </button>
              </div>
            </div>

            <br />
            <input
              type="submit"
              id="submit"
              value="Login"
              className="rounded rounded-e-lg bg-white-50  text-black block flex-1 min-w-0 w-full p-2.5 text-lg font-semibold"
              required
            />
            <p className="text-center mt-2">Forget Password ?</p>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
        <div className="rounded order-2 lg:order-1">
          <div className="w-2/3 mx-auto my-6 ">
            <Carousel autoSlide={true} autoSlideInterval={3000}>
              {slides.map((s) => (
                <img src={s} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
