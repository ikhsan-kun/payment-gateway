/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// server/index.js
import express from "express";
import cors from "cors";
import midtransClient from "midtrans-client";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-bKGGsi7eO6oa2dvUMkByVHBH", // Ganti dengan serverKey Midtrans kamu
});

app.post("/create-transaction", async (req, res) => {
  const { orderId, grossAmount, name, email } = req.body;

  try {
    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: grossAmount,
      },
      customer_details: {
        first_name: name,
        email: email,
      },
    };

    const transaction = await snap.createTransaction(parameter);
    res.json({ token: transaction.token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal membuat transaksi" });
  }
});

app.listen(port, () => {
  console.log(`✅ Backend berjalan di http://localhost:${port}`);
});
