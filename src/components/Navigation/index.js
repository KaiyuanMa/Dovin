import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";

function index() {
  const navToggleFunction = () => {
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const primaryNav = document.querySelector(".primary-navigation");
    navToggle.addEventListener("click", () => {
      primaryNav.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);
      primaryNav.toggleAttribute("data-visible");
    });
  };
  useEffect(() => {
    navToggleFunction();
  }, []);
  return (
    <header className="primary-header">
      <div className="container-full-width">
        <div className="header-ad flex-all-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="container-full-width border-top-bottom">
          <div className="container">
            <div className="flex">
              <Link>
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
                className="nav-list flex-v-center"
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
