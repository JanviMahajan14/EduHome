import React, { useState } from 'react';
import baseUrl from '../../utils/baseUrl';
import { useNavigate } from "react-router-dom";
import '../../utils/css/auth.css';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postData = async (e) => {
        try {
            e.preventDefault();
            const res = await fetch(`${baseUrl}/users/login`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            const data = await res.json()
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("jwt", data.token);
            localStorage.setItem("user", JSON.stringify(data.user))
            localStorage.setItem("role", data.user.role);
            toast.success("Login Successfull!", { position: toast.POSITION.TOP_RIGHT });
            navigate('/discuss');
        }
        catch (error) {
          toast.error(error.message, { position: toast.POSITION.TOP_RIGHT });
        }
  }

  return ( 
    <div className="auth-body">
      <div className="wrapper">
      <div className="title-text">
        <div className="title login">Login Form</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked />
          <input type="radio" name="slide" id="signup" />
          <label for="login" className="slide login">Login</label>
          <label for="signup" className="slide signup"><Link to="/signup">Signup</Link></label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form action="#" className="login">
            <div className="field">
                <input type="email" placeholder="Email Address" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className="pass-link"><a href="#">Forgot password?</a></div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" onClick={(e)=>postData(e)}/>
            </div>
            <div className="signup-link">Not a member?<Link to="/signup">Signup now</Link></div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
 
export default Login;