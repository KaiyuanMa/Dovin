import React, { useEffect, useState } from "react";
import "./styles.css";
import { useSelector } from "react-redux";

function index() {
  const { session } = useSelector((state) => state.session);
  const [cart, setCart] = useState([]);
  useEffect(() => {}, []);
  return <div>index</div>;
}

export default index;
