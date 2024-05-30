import React from 'react'

const Register = () => {
  return (
    <div className='container-fluid'>
      <h1 className='text-center'>register</h1>
       <div className='form-control'>
       <input type="text" placeholder='enter username' />
      <input type="text" placeholder='enter email' />
      <input type="text" placeholder='enter password' />
      <input type="text" placeholder='enter confirm password' />
       </div>
     
    </div>
  )
}

export default Register
