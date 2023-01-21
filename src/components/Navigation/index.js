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
    <header className="primary-header ff-body bg-neutral-500">
      <div className="container-full-width">
        <div className="header-ad flex-all-center padding-block-100 text-primary-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="container-full-width">
          <div className="border-top">
            <div className="user-control | container flex-h-center padding-block-600">
              <Link to="/" className="logo">
                <div>Dovin</div>
              </Link>
              <Link to="/UserControl">
                <i className="fa-light fa-user hover-primary-600" />
              </Link>
              <Link>
                <i className="fa-light fa-cart-shopping hover-primary-600" />
              </Link>
              <div
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
              </div>
            </div>
            <nav className="primary-navigation | padding-block-300 container-full-width border-top-bottom">
              <ul
                role="list"
                className="nav-list flex-all-center"
                id="primary-navigation"
              >
                <li>
                  <NavLink to="/customization/1">Lorem</NavLink>
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
