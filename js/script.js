/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
BY: ERNESTO RAMOS
5/19/2020
@ERNIE_RAMOS_
ERNRAMOS1991@GMAIL.COM
******************************************/
let randomNumber;
let randomQuote;
let color;
let html = "";
let bgColor = "";
let pTagQuote = "";
let pTagSource = "";
let pTag = "";
let quote = "";

/***
 * DATA STORED INSIDE DATA.JS
***/

/**
 * Returns a random quote from the `quotes` array.
 *
 * @param {arr} quotes - Array of objects from data.js.
 * @var {number} randomNumber - Random value from 0 to length of `quotes`.
 * @var {string} randomQuote - Uses randomNumber as an index value.
 * @return {string} Returns the index value called in randomQuote.
 */
function getRandomQuote(quotes) {
  randomNumber = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[randomNumber];
  //console.log(randomQuote)
  return randomQuote;
}

// @return {number} Returns a random number between 0 and 256.
function randomRGB() {
  return Math.floor(Math.random() * 256)
}

// @return {string} Returns 'rbg(xxx, xxx, xxx)'
function randomColor() {
  color = 'rgb(';
  color += `${randomRGB()}, `;
  color += `${randomRGB()}, `;
  color += `${randomRGB()})`;
  return color;
}

/**
 * Creates the necessary HTML string to change the quote on the screen.
 * Background color changes after every click of the button.
 *
 * @var {function} html - Calls on getRandomQuote to pick a random quote from `quotes`.
 * @var {string} pTagX - These three strings create the HTML needed to change the website.
 * @if {var} citation/year - Adds a <span> if citation and/or year is present. Else, closes with </p>.
 * @var {string} quote - Concatenates pTagQuote and pTagSource before it is rendered.
 */
function printQuote() {
  html = getRandomQuote(quotes);
  pTagQuote = `<p class="quote">${html.quote}</p>`
  pTagSource = `<p class="source">${html.source}`
  pTag =  `<p class="tag">${html.tag}</p>`
  if (html.tag) {
    pTag =  `<p class="tag">${html.tag}</p>`
  }
  if (html.citation) {
    pTagSource +=  `<span class="citation">${html.citation}</span>`
  }
  if (html.year) {
    pTagSource += `<span class="year">${html.year}</span></p>`
  } else { pTagSource += "</p>" }
  quote = bgColor + pTag + pTagQuote + pTagSource;
  document.getElementById('quote-box').innerHTML = quote;
  document.body.style.backgroundColor = randomColor();
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
