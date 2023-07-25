/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';

function Footer() {
  return (
    <footer className="bg-green-500 text-dark-brown py-10 px-5">
      <div className="flex justify-between items-center flex-wrap">
        <div className="w-full md:w-auto mb-8 md:mb-0">
          <h3 className="text-lg mb-4">Vacation Explorer</h3>
          <p>
            © {new Date().getFullYear()} Vacation Explorer. All rights
            reserved.
          </p>
          <p className="mt-4">
            123 Street Name
            <br />
            City, State, 12345
            <br />
            USA
          </p>
        </div>
        <div className="w-full md:w-auto mb-8 md:mb-0">
          <h3 className="text-lg mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto">
          <h3 className="text-lg mb-4">Follow Us</h3>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/path/to/facebook-icon.svg"
              alt="Facebook"
              className="h-6 w-6 mr-2"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/path/to/twitter-icon.svg"
              alt="Twitter"
              className="h-6 w-6 mr-2"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/path/to/instagram-icon.svg"
              alt="Instagram"
              className="h-6 w-6 mr-2"
            />
          </a>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p>Design by Ethmane</p>
      </div>
    </footer>
  );
}

export default Footer;
