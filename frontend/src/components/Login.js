import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Login = () => {
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
              <h3 className="text-center text-primary">Sign In</h3>
             
              {/* Email input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-group-text"><FaEnvelope /></span>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter a valid email address"
                    required
                  />
                </div>
              </div>

              {/* Password input */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text"><FaLock /></span>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter password"
                    required
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <Link to="#!" className="text-body">Forgot password?</Link>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg w-100">Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account? <Link to='/signup' className="link-danger">Register</Link>
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

export default Login;
