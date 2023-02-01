import React, { useEffect, useState } from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { apiGetUserCarts } from "../../api/quote";

function index() {
  const { session } = useSelector((state) => state.session);
  const [cart, setCart] = useState([]);

  const getUserCard = async () => {
    const carts = await apiGetUserCarts();
    console.log(quotes);
    console.log(carts);
  };

  useEffect(() => {
    getUserCard();
  }, []);

  return <div>index</div>;
}

export default index;
