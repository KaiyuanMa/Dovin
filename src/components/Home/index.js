import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import "./styles.css";
import homeFaceImg from "../../../public/img/3200x1280.png";
import squareImg from "../../../public/img/1600x1600.png";
import squareImg1 from "../../../public/img/1600x1600-1.avif";
import squareImg2 from "../../../public/img/1600x1600-2.avif";
import squareImg3 from "../../../public/img/1600x1600-3.avif";
import regImg from "../../../public/img/2000x1125.png";
import regImg1 from "../../../public/img/2000x1125-1.avif";
import { myAnimation } from "../../animation";

function index() {
  const main = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const animation0 = myAnimation("product-category", 0.3, 0.3);
      const animation1 = myAnimation("service-feature", 0.3, 0.3);
      const animation2 = myAnimation("gasp-home-1", 0.3);
      const animation3 = myAnimation(
        "home-even-column-text-children",
        0.3,
        0.3
      );
    }, main);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className="main-content" ref={main}>
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
                <img src={squareImg1} />
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
                <img src={squareImg2} />
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
                <img src={squareImg3} />
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
                <img src={squareImg1} />
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
              <h1 className="home-even-column-text-children | fs-primary-heading fw-light ff-heading">
                Lorem ipsum dolor
              </h1>
              <p className="home-text-block home-even-column-text-children | fs-body fw-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="home-even-column-text-children | fs-button fw-regular">
                lorem
              </button>
            </div>
            <img className="gasp-home-1" src={squareImg3} />
          </div>
        </div>
      </section>

      <section className="padding-block-800">
        <div className="container flow-700">
          <h1 className="fs-primary-heading fw-light ff-heading">
            Lorem ipsum
          </h1>
          <div className="home-service-feature | even-columns-rows">
            <div className="service-feature | flow-600">
              <img src={regImg1} />
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
            <div className="service-feature | flow-600">
              <img src={regImg1} />
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
