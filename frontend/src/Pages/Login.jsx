import React from 'react';

import Register from './Register';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-base-200 p-4">
      <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-6" method='get' action={Register}>
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        
        <div className="form-control mb-4">
          <label htmlFor="email" className="label">
            <span className="label-text">Email:</span>
          </label>
          <input 
            type="email" 
            id="email" 
            required 
            className="input input-bordered w-full" 
          />
        </div>
        
        <div className="form-control mb-4">
          <label htmlFor="password" className="label">
            <span className="label-text">Password:</span>
          </label>
          <input 
            type="password" 
            id="password" 
            required 
            className="input input-bordered w-full" 
          />
        </div>
        
        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
