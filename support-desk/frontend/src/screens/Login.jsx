import React from 'react'

const Login = () => {
  return (
    <div className='container-fluid'>
      <h1>Login</h1>
       <div className='form-control'>
           <input type="username" placeholder='' />
           <input type="password" placeholder='' />
           <button>Login</button>
       </div>
    </div>
  )
}

export default Login
