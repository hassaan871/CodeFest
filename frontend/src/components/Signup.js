import React from 'react';
import { FaFacebookF, FaUser, FaTwitter, FaLinkedinIn, FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from './Footer';


const Signup = () => {
  return (
    <section className="vh-100">
      <div className="container-fluid h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form className="border p-4 rounded shadow">
              <h3 className="text-center text-primary">Sign Up</h3>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text"><FaUser /></span>
                  <input type="text" className="form-control" id="username" placeholder="Enter username" required />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-group-text"><FaEnvelope /></span>
                  <input type="email" className="form-control" id="email" placeholder="Enter a valid email" required />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text"><FaLock /></span>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" required />
                </div>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg w-100">Sign Up</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account? <Link to="/" className="link-danger">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      
       <Footer />
    </section>
  );
};

export default Signup;
