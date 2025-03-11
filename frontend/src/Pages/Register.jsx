import React from 'react'
import Login from './Login'

export default function Register() {
  return (
    <div className="container">
      <form className="form" action={Login}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit" className="button">Register</button>
      </form>
    </div>
  )
}
