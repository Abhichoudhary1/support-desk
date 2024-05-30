import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    
                    <Link to={"/"} class="navbar-brand mb-0 h1">Support-desk</Link>
                    <span>
                    <Link to={"/Login"} className='mx-1 btn btn-sm btn-primary'>login</Link>
                    <Link to={"/Register"} className='mx-1 btn btn-sm btn-warning'>register</Link>
                    <button className='mx-1 btn btn-sm btn-danger'>logout</button>
                    </span>
                   
                </div>
            </nav>
        </div>
    )
}

export default Navbar
