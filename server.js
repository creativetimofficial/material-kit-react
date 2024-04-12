const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/presentation/bet", async (req, res) => {
  try {
    const targetUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

    const response = await fetch(targetUrl, {
      headers: {
        "X-CMC_PRO_API_KEY": "cff2c339-53ae-43d4-adbe-c68fa777706a",
        Host: "pro-api.coinmarketcap.com",
      },
    });

    const getLatest = await response.json();

    const price = getLatest.data.find((coin) => coin.symbol === "SOL").quote.USD.price;
    // console.log("USD for SOL =", price);

    res.send(price.toString());
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
