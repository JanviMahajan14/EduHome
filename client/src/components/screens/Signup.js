import React, { useState } from 'react';
import baseUrl from '../../utils/baseUrl';
import { useNavigate } from "react-router-dom";
import { RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../utils/css/auth.css';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Signup = () => {
  const navigate = useNavigate();
  const [isStudent, setUserState] = useState(true);
  const [Username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postData = async (e) => {
        try {
            e.preventDefault();
            const role = isStudent ? "student" : "teacher";
            const res = await fetch(`${baseUrl}/users/signup`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Username,
                    email,
                    password,
                    role
                })
            })

            const data = await res.json()
            if (data.error) {
                throw new Error(data.error);
            }
          
            localStorage.setItem("jwt", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("role", role);
            toast.success("Signup Successfull!", { position: toast.POSITION.TOP_RIGHT });
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
        <div className="title signup">Signup Form</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" />
          <input type="radio" name="slide" id="signup" checked />
          <label for="login" className="slide login"><Link to="/login">Login</Link></label>
          <label for="signup" className="slide signup">Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form action="#" className="signup">
            <div className="field">
                <input type="text" placeholder="UserName" required value={Username} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div className="field">
              <input type="email" placeholder="Email Address" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <RadioGroup aria-label="anonymous" name="anonymous" value={isStudent} row style={{marginTop:"10px"}}>
                <FormControlLabel value="true" control={<Radio />} label="Student" onChange={()=>{setUserState(!isStudent)}}/>
                <FormControlLabel value="false" control={<Radio />} label="Facility" onChange={()=>{setUserState(!isStudent)}}/>
            </RadioGroup>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" onClick={(e)=>postData(e)}/>
            </div>
            <div className="signup-link">Already a member? <Link to="/login">Login now</Link></div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
 
export default Signup;