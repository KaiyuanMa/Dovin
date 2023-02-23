const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const stripe = require("stripe")(
  "sk_test_51Mbps2F3Q2So9UlWpM90lizPQBkrscEgYORKtrRN9ymFeeWszknXNGpxzhC6LmmoMGwmnr0xFv7gKH9k5jUU532K00pzIRvjy5"
);

app.use(express.json());
app.use(cookieParser());
app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/public", express.static("public"));
app.use("/api/session", require("./routes/session"));
app.use("/api/option", require("./routes/option"));
app.use("/api/quote", require("./routes/quote"));
app.use("/api/guestQuote", require("./routes/guestQuote"));
app.use("/api/quoteItem", require("./routes/quoteItem"));
app.use("/api/guestQuoteItem", require("./routes/guestQuoteItem"));
app.use("/api/step", require("./routes/step"));
app.use("/api/stepSet", require("./routes/stepSet"));
app.use("/api/address", require("./routes/address"));
app.use("/api/oAuth", require("./routes/oAuth"));

app.use((err, req, res, next) => {
  if (
    err.status === 401 &&
    err.message === "Email and password does not match"
  ) {
    res.status(401).send({ message: "Email and password does not match" });
  }
  console.log(err);
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// app.post("/create-checkout-session", async (req, res) => {
//   // const { products } = req.body;
//   // let line_items = [];
//   // const product = await stripe.products.create({
//   //   name: "Custom Drapes",
//   //   description: "A description of my product",
//   // });
//   // for (let product of products) {
//   //   const stripe_price = await stripe.prices.create({
//   //     product: product.name,
//   //     unit_amount: product.price,
//   //     currency: "usd",
//   //   });
//   //   line_items.push({
//   //     price: stripe_price.id,
//   //     quantity: parseInt(product.quantity),
//   //   });
//   // }
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: "price_1Mbq8oF3Q2So9UlWjtTfTCDR",
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: `http://localhost:3000`,
//     cancel_url: `http://localhost:3000`,
//   });

//   res.redirect(303, session.url);
// });

const YOUR_DOMAIN = "http://localhost:3000";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1Mbq8oF3Q2So9UlWjtTfTCDR",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.send({ url: session.url });
});

const setUp = async () => {
  app.listen(port, () => console.log(`listening on port ${port}`));
};

setUp();
