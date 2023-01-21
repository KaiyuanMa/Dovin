import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function index() {
  return (
    <footer className="bg-dark-500 text-neutral-500 padding-block-800 ff-body fs-body">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand-wrapper">
            <div className="footer-brand | flex-direction-column flow-300">
              <div>Logo</div>
              <p>example@gmail.com ｜ 888-8888-8888</p>
              <div className="footer-social | flex-v-center">
                <i className="fa-brands fa-instagram hover-primary-600"></i>
                <i className="fa-brands fa-twitter hover-primary-600"></i>
                <i className="fa-brands fa-square-facebook hover-primary-600"></i>
              </div>
            </div>
          </div>
          <div className="footer-links-wrapper">
            <div className="footer-links | flex-all-center">
              <div className="flex-all-center flex-direction-column">
                <Link className="hover-primary-600">link A</Link>
                <Link className="hover-primary-600">link B</Link>
                <Link className="hover-primary-600">link C</Link>
                <Link className="hover-primary-600">link D</Link>
                <Link className="hover-primary-600">link E</Link>
              </div>
              <div className="flex-all-center flex-direction-column">
                <Link className="hover-primary-600">link A</Link>
                <Link className="hover-primary-600">link B</Link>
                <Link className="hover-primary-600">link C</Link>
                <Link className="hover-primary-600">link D</Link>
                <Link className="hover-primary-600">link E</Link>
              </div>
              <div className="flex-all-center flex-direction-column">
                <Link className="hover-primary-600">link A</Link>
                <Link className="hover-primary-600">link B</Link>
                <Link className="hover-primary-600">link C</Link>
                <Link className="hover-primary-600">link D</Link>
                <Link className="hover-primary-600">link E</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="rights | text-neutral-700">
          ©2023 Dovin. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default index;
