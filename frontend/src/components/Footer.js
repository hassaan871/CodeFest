// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary w-100" style={{ position: 'absolute', bottom: 0, left: 0 }}>
      {/* Copyright */}
      <div className="text-white mb-3 mb-md-0">
        Copyright © 2020. All rights reserved.
      </div>
      {/* Right */}
      <div>
        <a href="#!" className="text-white me-4"><FaFacebookF /></a>
        <a href="#!" className="text-white me-4"><FaTwitter /></a>
        <a href="#!" className="text-white me-4"><FaGoogle /></a>
        <a href="#!" className="text-white"><FaLinkedinIn /></a>
      </div>
    </footer>
  );
};

export default Footer;
