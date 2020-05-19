/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
BY: ERNESTO RAMOS
5/19/2020
@ERNIE_RAMOS_
ERNRAMOS1991@GMAIL.COM
******************************************/


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
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNumber];
  //console.log(randomQuote)
  return randomQuote;
}

/**
 * Creates the necessary HTML string to change the quote on the screen.
 *
 * @var {function} html - Calls on getRandomQuote to pick a random quote from `quotes`.
 * @var {string} pTagX - These two strings create the HTML needed to change the website.
 * @if {var} citation/year - Adds a <span> if citation and/or year is present. Else, closes with </p>.
 * @var {string} quote - Concatenates pTagQuote and pTagSource before it is rendered.
 */
function printQuote() {
  let html = getRandomQuote(quotes);
  let pTagQuote = `<p class="quote">${html.quote}</p>`
  let pTagSource = `<p class="source">${html.source}`
  let pTag =  `<p class="tag">${html.tag}</p>`
  if (html.tag) {
    pTag =  `<p class="tag">${html.tag}</p>`
  }
  if (html.citation) {
    pTagSource +=  `<span class="citation">${html.citation}</span>`
  }
  if (html.year) {
    pTagSource += `<span class="year">${html.year}</span></p>`
  } else { pTagSource += "</p>" }
  let quote = pTag + pTagQuote + pTagSource;
  document.getElementById('quote-box').innerHTML = quote;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
