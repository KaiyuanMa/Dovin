import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.css";
import gsap from "gsap";
import { fadeInNav } from "../../animation";

function index(params) {
  const hideNav = params.hideNav;
  const { cart } = useSelector((state) => state.cart);
  const [cartCount, setCartCount] = useState();
  let location = useLocation();
  const main = useRef();
  useEffect(() => {
    setCartCount(cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0));
  }, [cart]);

  const navToggleFunction = () => {
    const body = document.querySelector("body");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const primaryNav = document.querySelector(".primary-navigation");
    const navLinks = document.querySelectorAll(".nav-list a");
    const toggleNav = (isLink) => {
      if (isLink) {
        const navList = document.querySelector(".nav-list");
        if (getComputedStyle(navList).flexDirection !== "column") return;
      }
      primaryNav.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);
      primaryNav.toggleAttribute("data-visible");
      body.classList.toggle("no-scroll");
    };
    navToggle.addEventListener("click", () => toggleNav(false));
    navLinks.forEach((link) => {
      link.addEventListener("click", () => toggleNav(true));
    });
  };
  useEffect(() => {
    navToggleFunction();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      fadeInNav(".header-content");
    }, main);
    return () => ctx.revert();
  }, [location]);

  return (
    <header
      className={`primary-header ${hideNav ? "primary-header-collapse" : ""}`}
      ref={main}
    >
      <div className="header-content | container-full-width ff-body">
        <div className="header-ad flex-all-center padding-block-100 text-primary-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="container-full-width">
          <div className="border-top">
            <div className="user-control | container flex-h-center padding-block-700">
              <Link to="/" className="logo">
                <div>Dovin</div>
              </Link>
              <Link to="/UserControl/dashboard">
                <i className="fa-light fa-user hover-primary-600" />
              </Link>
              <Link className="cart-icon" to="/Cart">
                <i className="fa-light fa-cart-shopping hover-primary-600" />
                {cart.length > 0 ? (
                  <span className="fs-300 fw-semi-bold">{cartCount}</span>
                ) : null}
              </Link>
              <div
                className="mobile-nav-toggle"
                aria-controls="primary-navigation"
                aria-expanded="false"
              >
                {/* TODO: Toggle Icon */}
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
                  <NavLink to="/customization/1">Custom Drapes</NavLink>
                </li>
                <li>
                  <NavLink to="/customization/1">Roman Shades</NavLink>
                </li>
                <li>
                  <NavLink to="/customization/1">Valances</NavLink>
                </li>
                <li>
                  <NavLink to="/customization/1">Hardware</NavLink>
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
