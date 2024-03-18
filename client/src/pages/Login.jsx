import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <segment>
      <div className="maindiv">
      
        <div className="center-div">
          <div className="image-div">
            <img src="images/login.jpg" alt="login" height="200px"/>
          </div>
          <div className="content-div">
            <div className="heading">Welcome Back</div>
            <form>
              <label htmlFor="username/email">User/Email</label>
              <input type="text" />
              <label htmlFor="password">User/Email</label>
              <input type="text" />
              <Link to="/forgotPass">Forgot your password?</Link>
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </segment>
  );
};
