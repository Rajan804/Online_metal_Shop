import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md" action={Login}>
        <h2 className="text-center text-2xl font-semibold mb-4">Register</h2>
        
        <div className="form-control mb-4">
          <label className="label" htmlFor="name">
            <span className="label-text">Name:</span>
          </label>
          <input type="text" id="name" className="input input-bordered w-full" required />
        </div>
        
        <div className="form-control mb-4">
          <label className="label" htmlFor="email">
            <span className="label-text">Email:</span>
          </label>
          <input type="email" id="email" className="input input-bordered w-full" required />
        </div>
        
        <div className="form-control mb-4">
          <label className="label" htmlFor="password">
            <span className="label-text">Password:</span>
          </label>
          <input type="password" id="password" className="input input-bordered w-full" required />
        </div>
        
        <button type="submit" className="btn btn-primary w-full">Register</button>
        <p className='mt-3 flex items-center justify-center'>
          I have an account 
          <Link to={"/login"} className='text-pink-700 underline font-semibold'>Login</Link>
        </p>
      </form>
    </div>
  )
}
