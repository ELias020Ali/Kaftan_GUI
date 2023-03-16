import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles/register.css';


function Register() {
  return (
    <div>
      <div className='Title1'>
        <h2> Cool Kaftan</h2>
      </div>
      <div className='header2'></div>
        <div className='title'>
        <h1>Create Account</h1>
        </div>
        <div className='txt'>
        <TextField id="filled-basic" label="First Name..." variant="filled" />
        </div>
        <div className='txt2'>
        <TextField id="filled-basic" label="Last Name..." variant="filled" />
        </div>
        <div className='txt3'>
        <TextField id="filled-basic" label="YYYY/MM/DD..." variant="filled" />
        </div>
        <div className='txt4'>
        <TextField id="filled-basic" label="Address..." variant="filled" />
        </div>
        <div className='txt5'>
        <TextField id="filled-basic" label="Password..." variant="filled" />
        </div>
      <div className='registerbut'>
      <Button color="secondary">Register</Button>
      </div>
      <div className="footer2">
            Cool Kaftan
        </div>


    </div>
  )
}

export default Register