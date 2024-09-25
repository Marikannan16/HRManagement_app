import React, { useState } from "react";
// import "../App.css";
import { useDispatch } from "react-redux";
import ENHR from "../../assets/logo.png";
import logo from "../../assets/screen.png";
import { login } from "../../features/logSlice";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { CiLock } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(true);
  const [error, setError] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const siteKey = '6LfKYE0qAAAAAGqWKhPQy4u7_sG0AFbITBJXRuGt'; // Replace with your site key
  const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
        console.log('Captcha value:', value);
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (!captchaValue) {
        alert('Please complete the reCAPTCHA');
        return;
    }

    if (!email || !password) {
      setError("Please fill the credential");
      return;
    }
    dispatch(login({ email, password }));
    navigate('/home')
  };

  const visiblePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showpassword);
  };
  return (
    <>
      <div>
        <div className="flex flex-col-reverse lg:flex-row overflow-hidden">
          <div className="px-36 pb-20 pt-10  w-full lg:w-1/2 h-full lg:h-screen bg-white relative">
            <div className="flex flex-col justify-center gap-6 items-start">
              <img
                src={ENHR}
                alt="ENHR logo"
                className="mx-auto"
                width={80}
              />
              <h4 className="text-2xl">Welcome to<br /><span className="text-3xl font-bold">ENCompliance HR</span></h4>
            </div>

            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-semibold pb-2 mt-2">Login</h3>
              <label
                htmlFor="email"
                className="block pb-1"
              >
                Email ID
              </label>
              <div className="relative flex items-center pb-2">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full ps-10 pt-2 pb-2 rounded"
                  placeholder="Enter Your Email ID"
                  required
                />
                <AiOutlineMail className="absolute ms-1 text-xl left-2" />
              </div>
              <label
                htmlFor="password"
                className="block p-1"
              >
                Password
              </label>
              <div className="relative flex items-center pb-2">
                <input
                  type={showpassword ? "password" : "text"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full ps-10 pt-2 pb-2 rounded"
                  placeholder="Enter Your Password "
                  required
                />
                <CiLock className="absolute text-2xl left-2" />
                <div
                  className="absolute text-xl right-2 px-1"
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
              <div>
              <ReCAPTCHA className="origin-top-left transform scale-[0.77]"
                sitekey={siteKey}
                onChange={handleCaptchaChange}
            />
              </div>
              <input
                type="submit"
                id="submit"
                value="Login"
                className="w-full bg-yellow-500 text-md py-1.5 rounded cursor-pointer"
                required
              />
              <p className="text-center py-2 cursor-pointer pb-12 lg:pb-20">Forget Password ?</p>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
            <div className="h-96 w-96 rounded-full absolute -left-36 -bottom-60" style={{ background: 'rgb(255,252,0)',
background: 'linear-gradient(192deg, rgba(255,252,0,0.7399159492898721) 0%, rgba(255,255,255,0.4878151089537377) 100%)' }}></div>

          </div>
          <div className="flex flex-col justify-center items-center relative px-28 w-full lg:w-1/2 h-screen bg-yellow-300">
            <div className="flex flex-col justify-center items-start">
              <img
                src={logo}
                alt="Login logo"
                className="mx-auto"
                width={340}
              />
              <div className="text-center mt-3">
                <p className="text-2xl font-semibold">Compliance simplified, Result Amplified<br /><span className="text-base">Your trusted partners for seamless business compliance and success</span></p>
              </div>
            </div>
            <div className="h-96 w-96 rounded-full absolute -right-32 -top-60" style={{ background: 'rgb(87,87,81)',
background: 'linear-gradient(80deg, rgba(87,87,81,0.6698879380853904) 0%, rgba(255,255,255,0.4878151089537377) 100%)',opacity:'0.7' }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
