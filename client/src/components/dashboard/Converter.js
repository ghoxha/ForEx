const alpha = require("alphavantage")({ key: "L4JLBZCFQ4OVF2W5" });

alpha.forex.rate("btc", "usd").then(data => {
  console.log(data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
});
