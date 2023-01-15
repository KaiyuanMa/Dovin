import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";

function index() {
  return (
    <header className="primary-header">
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <div>
        <Link>
          <div>Dovin</div>
        </Link>
        <Link>
          <i className="fa-light fa-cart-shopping" />
        </Link>
        <Link>
          <i className="fa-light fa-user" />
        </Link>
      </div>
      <nav className="primary-navigation">
        <ul role="list" className="nav-list">
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
    </header>
  );
}

export default index;
