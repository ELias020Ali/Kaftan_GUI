import React from 'react'
import Manager from './Manager';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles/login.css';
import Footer from './Footer';


import { createTheme } from '@mui/material/styles';
// npm i @material/textfield
function Login() {
    const navigate = useNavigate();

  return (
    <div>
      <div className='MainTitle'>
        <p>Cool Kaftan</p>
      </div>
      <div className='header'>
      </div>
      <div className="container">
      <p>Login Details</p>
      <div className='text-field'>
        <TextField id="filled-basic" label="Email" variant="filled" />
        <TextField id="filled-basic" label="password" variant="filled" />

      </div>

        <br/>
{/* nfuewibfwe */}

        {/* <button onClick={Manager}>Login</button> */}
        <br/>
        <div className='loginbut'>
        <Button onClick={() => navigate("/Manager")} variant="outlined" color="error">Login</Button>
               {/* <button onClick={() => navigate("/Manager")}>Login</button> */}
        </div>

       <br/>
       <div className='create'>
       <Button onClick={() => navigate("/Register")} variant="text">Create Account</Button>
       </div>
       <br/>
       
      {/* <div className='footer'>
        footer
      </div> */}
      </div>
      
      <Footer/>


    </div>
  )
}

export default Login