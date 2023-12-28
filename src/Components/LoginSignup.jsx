import React, { useState } from "react";
import "./LoginSignup.css";
import usericon from "./Assets/person.png";
import emailicon from "./Assets/email.png";
import paswordicon from "./Assets/password.png";

const LoginSignup = () => {
  const[action,setAction] =useState("Login");
  return (
    <div className="container">

      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
      {action === "Login" ? <div></div>:
        <div className="input">
          <img src={usericon} alt="" />
          <input type="text" placeholder="Name" />
        </div>}

        

        <div className="input">
          <img src={emailicon} alt="" />
          <input type="email"placeholder="E-mail" />
        </div>

        <div className="input">
          <img src={paswordicon} alt="" />
          <input type="password"placeholder="Password" />
        </div>

      </div>
      {action === "Sign Up" ? <div></div> :<div className="forgetpassword">Lost Paswword? <span>Click Here!</span></div>}
      <div className="submitcontainer">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
