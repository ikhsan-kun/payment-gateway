const handlePayment = async (produk) => {
  try {
    const response = await fetch("http://localhost:3000/create-transaction", { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId: produk.order_id + "-" + new Date().getTime(),
        grossAmount: Number(produk.harga.replace(/[^\d]/g, "")),
        name: "Ikhsan",
        email: "ikhsan@example.com",
      }),
    });

    const data = await response.json();
    if (data.token) {
      window.snap.pay(data.token, {
        onSuccess: function(result) {
          alert("Pembayaran berhasil!");
          console.log(result);
        },
        onPending: function(result) {
          alert("Menunggu pembayaran...");
          console.log(result);
        },
        onError: function(result) {
          alert("Pembayaran gagal.");
          console.log(result);
        },
        onClose: function() {
          alert("Popup ditutup tanpa menyelesaikan pembayaran");
        },
      });
    }
  } catch (err) {
    console.error("Gagal membuat transaksi:", err);
  }
};

export default handlePayment;