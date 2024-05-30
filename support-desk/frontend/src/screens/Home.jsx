import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="container fluid">
      
        <h1 className="display-6 text-center">Welcome </h1>

        <div className="card p-5 my-3">
          
              <Link
                to={"/all-users"}
                className="btn btn-outline-dark w-100 my-2"
              >
                View All Users
              </Link>
              <Link
                to={"/all-tickets"}
                className="btn btn-outline-dark w-100 my-2"
              >
                View All Tickets
              </Link>
            
          
            
              <Link
                to={"/new-tickets"}
                className="btn btn-outline-dark w-100 my-2"
              >
                Create New Ticket
              </Link>
              <Link
                to={"/all-tickets"}
                className="btn btn-outline-dark w-100 my-2"
              >
                View All Ticket
              </Link>
          
          
        </div>
      </div>
    
  )
}

export default Home
