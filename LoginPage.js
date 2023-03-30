import React from "react";
import "./LoginPage.css";
import { useState } from "react";

// Usage of useState hook to handle a state.
const LoginPage = () => {
  const [data, setData] = useState({
    username: "",
    email:"",
    password:""
  });

  //onChange function which handles the input feilds.
  const handleChan = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev)=>{
    return{...prev,[name]:value}
    })
      };

  return (
    <form>
      <div>
      <p>Login Form</p>
      </div>
      <div>
        <input
          value={data.username}
          onChange={handleChan}
          className="name"
          type="text"
          name="username"
          placeholder="Username"
        />
      </div>
      <div>
        <input
          value={data.email}
          onChange={handleChan}
          className="name"
          type="text"
          name="email"
          placeholder="Email"
        />
      </div>
      <div>
        <input
        value={data.password}
        onChange={handleChan}
        className="pass"
        type="password"
        name="password"
        placeholder="Password"
        />
      </div>
      <div>
        <button className="btn">Submit</button>
      </div>
    </form>
  );
};

export default LoginPage;
