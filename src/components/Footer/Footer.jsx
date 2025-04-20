import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h6 className="footer-title text-lg mb-2">Library Services</h6>
          <a className="link link-hover">Book Rentals</a><br />
          <a className="link link-hover">Reading Rooms</a><br />
          <a className="link link-hover">E-books</a><br />
          <a className="link link-hover">Workshops</a>
        </div>
        <div>
          <h6 className="footer-title text-lg mb-2">About</h6>
          <a className="link link-hover">Our Story</a><br />
          <a className="link link-hover">Blog</a><br />
          <a className="link link-hover">Contact</a><br />
          <a className="link link-hover">Support</a>
        </div>
        <div>
          <h6 className="footer-title text-lg mb-2">Legal Info</h6>
          <a className="link link-hover">Terms of Service</a><br />
          <a className="link link-hover">Privacy Policy</a><br />
          <a className="link link-hover">Cookie Policy</a>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} BookNest Library. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
