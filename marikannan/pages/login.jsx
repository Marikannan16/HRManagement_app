import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import logo from "./logo.png";
import img from './carosual.png'
import { login } from "../feature/logSlice";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { CiLock } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import Carousel from "./Carousel";
const Login = () => {
  const dispatch=useDispatch();
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[showpassword,setShowPassword]=useState(true)
  const [error,setError]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email,password,error)

    if(!email || !password){
      setError('Please fill the credential');
      return;
    }
    dispatch(login({email,password}));
    setEmail('');
    setPassword('');
    setError('');
  }

const visiblePassword=(e)=>{
    e.preventDefault()

    setShowPassword(!showpassword)
}
const slides=[img,img,img
]  
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 ">
        <div className="rounded px-20 py-20 bg-gray-100">
          <div className="brand flex items-center max-w-sm mx-auto">
            <img src={logo} className="logo"/>
            <h5 className="text-center ms-4">ENCOMPLIANCE HR</h5>
          </div><br/><br/>
          <div className="max-w-sm mx-auto justify-start">
            <h5 className="text-left">Welcome to </h5>
            <h3 className="font-bold text-left">ENCompliance HR</h3>
          </div><br/>
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <h3 className="text-left">Login</h3>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black-900 text-left"
            >
              Email ID
            </label>
            <div className="flex bg-white border border-e-0 border-black rounded-md focus:outline-dashed">
              <span className="inline-flex items-center px-3 text-sm text-white-900 bg-transparent">
                <AiOutlineMail/>
              </span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className=" bg-transparent border-none text-black block flex-1 min-w-0 w-full text-sm p-2.5"
                placeholder="Enter Your Email ID" required
              />
            </div>
            <br />

            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-black-900 text-left"
            >
              Password
            </label>
            <div className="flex bg-white border border-e-0 border-black rounded-md">
              <span className="inline-flex items-center px-3 text-sm text-white-900">
               <CiLock className="w-4 h-4 text-white-500"/>
              </span>
              <input
                type={showpassword ? "password":"text"}
                id="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className=" bg-white-50  border-none text-black block flex-1 min-w-0 w-full text-sm p-2.5"
                placeholder="Enter Your Password " required
              />
              <span className="inline-flex items-center px-3 text-sm text-white-900 bg-transparent">
              <button onClick={visiblePassword}>{showpassword ? (<VscEye/>) :(<VscEyeClosed/>) }</button>
              </span>
              
            </div>
            <br/><br/>
            <input
                type="submit"
                id="submit" value="submit"
                className="rounded rounded-e-lg bg-white-50  text-black block flex-1 min-w-0 w-full text-sm p-2.5"required
              /><br/>
              <p className="text-center">Forget Password ?</p>
              {error && <p style={{color:'red'}}>{error}</p>}
          </form>
        </div>
        <div className="rounded">
          <div className="w-2/3 mx-auto my-32 shadow-md">
            <Carousel autoSlide={true} autoSlideInterval={3000}>
              {slides.map((s)=>(<img src={s}/>))}
            </Carousel>
          </div>
          {/* <div><img src={img} /></div> */}

          
          {/* <div className="flex items-center justify-center h-screen bg-gray-100">
            <Carosual images={slides} className="w-64 m-auto pt-10"/>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
