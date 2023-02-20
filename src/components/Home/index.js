import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import homeFaceImg from "../../../public/img/3200x1280.png";
import squareImg from "../../../public/img/1600x1600.png";
import regImg from "../../../public/img/2000x1125.png";

function index() {
  return (
    <div className="main-content">
      <section className="padding-block-800 bg-neutral-500 ">
        <div className="container home-face-img">
          <img
            src="https://dovin.s3.amazonaws.com/Static/img/homeFaceImg.png"
            alt=""
          />
        </div>
      </section>
      <section className="padding-block-800">
        <div className="product-categories | container flex-all-center">
          <Link>
            <div className="product-category flow-400">
              <div className="img-container">
                <img src={squareImg} />
              </div>
              <div>
                <h1 className="fs-secondary-heading fw-light ff-heading">
                  Lorem
                </h1>
              </div>
            </div>
          </Link>
          <Link>
            <div className="product-category flow-400">
              <div className="img-container">
                <img src={squareImg} />
              </div>
              <div>
                <h1 className="fs-secondary-heading fw-light ff-heading">
                  Lorem
                </h1>
              </div>
            </div>
          </Link>
          <Link>
            <div className="product-category flow-400">
              <div className="img-container">
                <img src={squareImg} />
              </div>
              <div>
                <h1 className="fs-secondary-heading fw-light ff-heading">
                  Lorem
                </h1>
              </div>
            </div>
          </Link>
          <Link>
            <div className="product-category flow-400">
              <div className="img-container">
                <img src={squareImg} />
              </div>
              <div>
                <h1 className="fs-secondary-heading fw-light ff-heading">
                  Lorem
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* <section className="padding-block-800">
        <div className="container">
          <div className="text-in-image text-in-image-bottom-left">
            <img src={homeFaceImg} alt="" />
            <div className="flow-400 absolute-center">
              <h1 className="fs-primary-heading fw-light ff-heading">
                Lorem ipsum dolor
              </h1>
              <p className="fs-body fw-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <button className="fs-button fw-regular">lorem</button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="padding-block-800">
        <div className="container">
          <div className="even-columns">
            <div className="home-even-column-text | flow-400">
              <h1 className="fs-primary-heading fw-light ff-heading">
                Lorem ipsum dolor
              </h1>
              <p className="home-text-block | fs-body fw-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="fs-button fw-regular">lorem</button>
            </div>
            <img src={squareImg} />
          </div>
        </div>
      </section>

      <section className="padding-block-800">
        <div className="container flow-700">
          <h1 className="fs-primary-heading fw-light ff-heading">
            Lorem ipsum
          </h1>
          <div className="home-service-feature | even-columns-rows">
            <div className="flow-600">
              <img src={regImg} />
              <div>
                <h2 className="fs-secondary-heading fw-light ff-heading">
                  Lorem ipsum dolor
                </h2>
                <p className="home-text-block | fs-body fw-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            </div>
            <div className="flow-600">
              <img src={regImg} />
              <div>
                <h2 className="fs-secondary-heading fw-light ff-heading">
                  Lorem ipsum dolor
                </h2>
                <p className="home-text-block | fs-body fw-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
