import React from "react";
import logo from '../assets/images/1.png'

const Login = () => {

  return (

    <div className='login-container flex flex-col items-center justify-center w-screen h-screen bg-neutral-900 text-stone-300'>
      <h1 className='login-title font-bold text-2xl'>Welcome</h1>
      <div className='flex'>
        <div className='login-logo-container flex items-center'>
          <img id='login-logo' className='logo p-8 mt-12' src={logo}/>
        </div>
        <form className='flex flex-col bg-stone-800 rounded-md shadow-lg p-12 mt-12' action=''>
          <label htmlFor='usernameField' className='font-semibold text-xs'>Username or Email</label>
          <input className='flex items-center h-12 px-4 w-64 bg-neutral-700 mt-2 rounded focus:outline-none focus:ring-2' type='text'></input>
          <label htmlFor='passwordField' className='font-semibold text-xs mt-3'>Password</label>
          <input className='flex items-center h-12 px-4 w-64 bg-neutral-700 mt-2 rounded focus:outline-none focus:ring-2' type='password'></input>
          <button className='flex items-center justify-center h-12 px-6 w-64 bg-blue-500 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-600'>Login</button>
          <div className='login-redirects flex mt-6 justify-center text-xs'>
            <a className='text-blue-500 hover:text-blue-600' href='#'>Forgot Password</a>
            <span id='login-logo' className="mx-2 text-neutral-700">/</span>
            <a className='text-blue-500 hover:text-blue-600' href='#'>Sign Up</a>
          </div>
        </form>
      </div>

    </div>


  );
};


export default Login;

