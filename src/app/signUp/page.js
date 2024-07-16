
import React from 'react'; 
import Image from 'next/image';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup ()  {
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
                    <h2 className='text-warning'>Sign up</h2>
                        <form className="form-group g-3 m-auto">
                            <div class="form-group row g-3 m-auto">
                            <div class="form-group col-md-6">
                                <input type="text" className="form-control " placeholder="First Name" required />
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" className="form-control " placeholder="Last Name" required />
                            </div>
                            </div>
                            <div class="form-group row g-3 m-auto">
                            <div className="form-group col-md-8">
                                <input type="text" className="form-control" placeholder="Email" required />
                            </div>
                            
                            <div className="form-group col-md-6">
                                <input type="date" className="form-control" placeholder="BirthDate" required />
                            </div>

                            <div className="form-group col-md-7">
                                <select id="inputState" class="form-select">
                                <option selected>Choose Your Country  </option>
                                <option>...</option>
                                </select>

                            </div>
                            <div className="form-group col-md-6">
                                <input type="password" className="form-control" placeholder="Password" required />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="password" className="form-control" placeholder="Confirm Password" required />
                            </div>
                            </div>


                            <button type="submit" className="btn btn-warning btn-block mt-5">Sign Up</button>
                            <br />
                            <br />
                            <h6 className='text-white' >Already have an account? <a className='text-warning' > Sign in</a> </h6>
                        </form>
                </div>
            </div>
        </div>
    </div>
     );
}
 