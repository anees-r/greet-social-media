import React from "react";
import "./Login.scss";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Meet Greet!</h1>
          <p>
            Greet is a platform where you can meet new people and make friends.{" "}
            <br />
            Join the world. <br /> Join Greet!
          </p>
          <span>Don't have an account? Register Now!</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
