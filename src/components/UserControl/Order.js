import React, { useEffect, useState } from "react";
import { apiGetUserOrders } from "../../api/quote";

function Order() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await apiGetUserOrders();
    setOrders(response.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="padding-block-700 user-control-sub-page">
      <h2 className="ff-heading fw-light padding-block-800 fs-primary-heading">
        Orders
      </h2>
      {orders.length > 0 ? (
        <ul role="list" className="order-list">
          {orders.map((order) => (
            <li className="order-list-item | bg-neutral-400 padding-block-500">
              <div>
                <h2 className="ff-heading">{order.name}</h2>
                <ul role="list" className="text-neutral-700 fs-body">
                  {order.quoteItems.map((quoteItem) => {
                    if (!quoteItem.measurements)
                      return (
                        <li>{`${quoteItem.step.name}: ${quoteItem.option.name}`}</li>
                      );
                    else
                      return (
                        <li>{`${quoteItem.step.name}: ${quoteItem.measurements}`}</li>
                      );
                  })}
                </ul>
              </div>
              <div className="order-list-item-second-div">
                <div className="cart-item-info-price | fw-semi-bold fs-price flex-all-center">
                  {Number(order.cost).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
                <p className="fs-500">
                  {order.orderState.name.charAt(0).toUpperCase() +
                    order.orderState.name.slice(1)}
                </p>
                <p className="text-neutral-700 fs-body">
                  Qty: {order.quantity}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Looks like you don't have any orders.</p>
      )}
    </div>
  );
}

export default Order;
