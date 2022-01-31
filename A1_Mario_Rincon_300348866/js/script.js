/******************************************
Mario Rincon Dondi - 300348866
*****************************************/

/*** 
 * `quotes` array 
***/
var quotes = new Array();

const quote1 = {
    quote: "Success is only meaningful and enjoyable if it feels like your own",
    source: "Michelle Obama",
    citation: "Oregon State University Commencement Address",
    year: 2012
}

const quote2 = {
    quote: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless",
    source: "Jamie Paolinetti"
}

const quote3 = {
    quote: "If you do every job like you're going to do it for the rest of your life, that's when you get noticed",
    source: "Mary Barra, CEO, GM"
}

const quote4 = {
    quote: "Optimism is a happiness magnet. If you stay positive, good things and good people will be drawn to you",
    source: "Mary Lou Retton"
}

const quote5 = {
    quote: "I am happy because I'm grateful. I choose to be grateful. That gratitude allows me to be happy",
    source: "Will Arnett"
}

quotes = [quote1, quote2, quote3, quote4, quote5]


/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
	let randomNumber = Math.floor(Math.random()*quotes.length);
	return quotes[randomNumber];
}


/***
 * `printQuote` function
***/
function printQuote(){
let randomQuote = getRandomQuote();

let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "</p><p class='source'>" +
randomQuote.source + "</p>"

document.getElementById('quote-box').innerHTML = PtoHTML1;

}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote);