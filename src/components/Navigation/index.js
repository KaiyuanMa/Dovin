import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";

function index() {
  const navToggleFunction = () => {
    const body = document.querySelector("body");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const primaryNav = document.querySelector(".primary-navigation");
    navToggle.addEventListener("click", () => {
      primaryNav.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);
      primaryNav.toggleAttribute("data-visible");
      body.classList.toggle("no-scroll");
    });
  };
  useEffect(() => {
    navToggleFunction();
  }, []);
  return (
    <header className="primary-header ff-body">
      <div className="container-full-width">
        <div className="header-ad flex-all-center padding-block-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="container-full-width border-top-bottom">
          <div className="container padding-block-200">
            <div className="user-control | flex-v-center padding-block-600">
              <Link className="logo">
                <div>Dovin</div>
              </Link>
              <Link>
                <i className="fa-light fa-cart-shopping" />
              </Link>
              <Link>
                <i className="fa-light fa-user" />
              </Link>
              <button
                className="mobile-nav-toggle"
                aria-controls="primary-navigation"
                aria-expanded="false"
              >
                <i
                  className="fa-light fa-bars icon-hamburger"
                  aria-hidden="true"
                />
                <i
                  className="fa-light fa-xmark icon-close"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Menu</span>
              </button>
            </div>
            <nav className="primary-navigation">
              <ul
                role="list"
                className="nav-list flex-all-center"
                id="primary-navigation"
              >
                <li>
                  <NavLink to="/">Lorem</NavLink>
                </li>
                <li>
                  <NavLink to="/">Lorem</NavLink>
                </li>
                <li>
                  <NavLink to="/">Lorem</NavLink>
                </li>
                <li>
                  <NavLink to="/">Lorem</NavLink>
                </li>
                <li>
                  <NavLink to="/">Lorem</NavLink>
                </li>
                <li>
                  <NavLink to="/">Lorem</NavLink>
                </li>
                <li>
                  <NavLink to="/">Lorem</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default index;