/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const NUMBERS = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const SYMBOLS = ["♦", "♥", "♠", "♣"];
function arrayLocation(numberLength) {
  return Math.floor(Math.random() * numberLength);
}

window.onload = function() {
  //Get a random number and also a random symbol
  let number = NUMBERS[arrayLocation(NUMBERS.length)];
  let symbol = SYMBOLS[arrayLocation(SYMBOLS.length)];
  console.log(NUMBERS[number]);
  console.log(SYMBOLS[symbol]);
  //Put the random number in the DIV
  let numberDIV = document.querySelector("#divNumber");
  numberDIV.innerHTML = `<p class="cardNum">${number}</p>`;
  //Put the symbol and the color needed
  let symbolDIVs = document.querySelectorAll(".symbClass");
  symbolDIVs.forEach(function(symbolDIV) {
    symbol == "♦" || symbol == "♥"
      ? (symbolDIV.innerHTML = `<p class="cardSymb text-danger">${symbol}</p>`)
      : (symbolDIV.innerHTML = `<p class="cardSymb">${symbol}</p>`);
  });
};
