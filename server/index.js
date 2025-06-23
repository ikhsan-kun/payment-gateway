/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const midtransClient = require("midtrans-client");
const path = require("path");

const app = express();
const PORT = 3000;

// Konfigurasi Midtrans
const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: 'SB-Mid-server-bKGGsi7eO6oa2dvUMkByVHBH', 
});

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/create-transaction", async (req, res) => {
  const { orderId, harga, name, email } = req.body;

  const parameter = {
    transaction_details: {
      order_id: orderId,
      harga: harga,
    },
    customer_details: {
      first_name: name,
      email: email,
    },
  };

  try {
    const transaction = await snap.createTransaction(parameter);
    res.json({ token: transaction.token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
