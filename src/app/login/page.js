
import React from 'react';
import Image from 'next/image';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


export default function login ()  {
    return ( 

  <div className="container-fluid h-100 w-100 bg-dark">
      <div className="row h-100">
          <div className={`col-lg-8 d-none d-lg-block  h-100 ps-0 `} >
              {/*TODO  The background image */}
              <img src="/LoginBG2.jpg" alt="Background" className='img-fluid h-100 '/>
          </div>
          <div className="col-lg-4 col-md-12 d-flex align-items-center ">
              <div className={`login-form text-center m-auto`}>
                  <div className="mb-4">
                      <Image  src="/favicon.ico" alt="Logo"  width={60} height={60} /> 
                  </div>
                  <h2 className='text-warning'>Login</h2>
                  <form className="form-group m-auto">
                      <div className="form-group m-5">
                          <input type="text" className="form-control " placeholder="Username" required />
                      </div>
                      <div className="form-group m-5">
                          <input type="password" className="form-control" placeholder="Password" required />
                      </div>
                      <button type="submit" className="btn btn-warning btn-block">Login</button>
                      <br/>
                      <br/>
                      <h6 className='text-white' >No Account? <a className='text-warning' > Register</a> </h6>
                  </form>
              </div>
          </div>
      </div>
  </div>
     );
}
 
