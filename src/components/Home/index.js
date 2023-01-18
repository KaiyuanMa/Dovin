import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import homeFaceImg from "../../../public/img/3200x1280.png";
import squareImg from "../../../public/img/1600x1600.png";
import regImg from "../../../public/img/2000x1125.png";

function index() {
  return (
    <div className="main-content ff-body">
      <section className="padding-block-800">
        <div className="container">
          <img src={homeFaceImg} alt="" />
        </div>
      </section>

      <section className="padding-block-800">
        <div className="product-categories | container flex-all-center">
          <Link>
            <div className="product-category">
              <div className="img-container">
                <img src={squareImg} />
              </div>
              <div>
                <h1>Lorem</h1>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </Link>
          <Link>
            <div className="product-category">
              <div className="img-container">
                <img src={squareImg} />
              </div>
              <div>
                <h1>Lorem</h1>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </Link>
          <Link>
            <div className="product-category">
              <div className="img-container">
                <img src={squareImg} />
              </div>
              <div>
                <h1>Lorem</h1>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </Link>
          <Link>
            <div className="product-category">
              <div className="img-container">
                <img src={squareImg} />
              </div>
              <div>
                <h1>Lorem</h1>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="padding-block-800">
        <div className="container">
          <div className="text-in-image text-in-image-bottom-right">
            <img src={homeFaceImg} alt="" />
            <div>
              <h1 className="fs-primary-heading fw-light ff-heading">Lorem</h1>
              <p className="fs-body fw-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                mattis, sapien sollicitudin tristique egestas,
              </p>
              <button className="fs-button fw-regular">lorem</button>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-block-800">
        <div className="container">
          <div className="even-columns">
            <div>
              <h1 className="fs-primary-heading fw-light ff-heading">Lorem</h1>
              <p className="fs-body fw-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                mattis, sapien sollicitudin tristique egestas,
              </p>
              <button className="fs-button fw-regular">lorem</button>
            </div>
            <img src={squareImg} />
          </div>
        </div>
      </section>

      <section className="padding-block-800">
        <div className="container">
          <h1 className="fs-primary-heading fw-light ff-heading">
            Lorem ipsum
          </h1>
          <div className="even-columns-rows ">
            <div>
              <img src={regImg} />
              <div>
                <h2 className="fs-secondary-heading fw-light ff-heading">
                  Lorem ipsum dolor
                </h2>
                <p className="fs-body fw-regular">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  mattis, sapien sollicitudin tristique egestas,
                </p>
              </div>
            </div>
            <div>
              <img src={regImg} />
              <div>
                <h2 className="fs-secondary-heading fw-regular ff-heading">
                  Lorem ipsum dolor
                </h2>
                <p className="fs-body fw-regular">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  mattis, sapien sollicitudin tristique egestas,
                </p>
              </div>
            </div>
            <div>
              <img src={regImg} />
              <div>
                <h2 className="fs-secondary-heading fw-regular ff-heading">
                  Lorem ipsum dolor
                </h2>
                <p className="fs-body fw-regular">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  mattis, sapien sollicitudin tristique egestas,
                </p>
              </div>
            </div>
            <div>
              <img src={regImg} />
              <div>
                <h2 className="fs-secondary-heading fw-regular ff-heading">
                  Lorem ipsum dolor
                </h2>
                <p className="fs-body fw-regular">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  mattis, sapien sollicitudin tristique egestas,
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
