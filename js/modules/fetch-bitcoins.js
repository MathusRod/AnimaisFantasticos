export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPrice = document.querySelector(".btc-preco");
      btcPrice.innerText = (100/bitcoin.BRL.buy).toFixed(4);
    });
}
