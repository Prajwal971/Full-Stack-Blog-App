import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="Username" />
        <input required type="password" placeholder="Password" />
        <button>Login</button>
        <p>This is an message</p>
        <span>Dont you have an account<Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login