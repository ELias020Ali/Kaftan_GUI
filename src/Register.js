import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles/register.css';

function Register() {
  return (
    <div>
        <div className='title'>
        <h1>Create Account</h1>
        </div>
        <div className='button2'>
        <TextField id="filled-basic" label="First Name..." variant="filled" />
        <br/>
        <TextField id="filled-basic" label="Last Name..." variant="filled" />
        <br/>
        <TextField id="filled-basic" label="YYYY/MM/DD..." variant="filled" />
        <br/>
        <TextField id="filled-basic" label="Address..." variant="filled" />
        <br/>
        <TextField id="filled-basic" label="Password..." variant="filled" />
        </div>
      <br/>
      <div className='registerbut'>
      <Button color="secondary">Register</Button>
      </div>


    </div>
  )
}

export default Register