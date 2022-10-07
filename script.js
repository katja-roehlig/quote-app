const but = document.querySelector("#but");
const quoteEl = document.querySelector("#quote");
const authorEl = document.querySelector("#author");

but.addEventListener("click", function () {
  const quoteUrl = "https://quote-garden.herokuapp.com/api/v3/quotes/random";
  fetch(quoteUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const shownQuote = data.data[0].quoteText;
      let shownAuthor = data.data[0].quoteAuthor;
      quoteEl.innerText = shownQuote;
      authorEl.innerText = shownAuthor;
    });
});

//Button 2

const but2 = document.querySelector("#but2");
const quoteEl2 = document.querySelector("#quote2");
const authorEl2 = document.querySelector("#author2");

but2.addEventListener("click", function () {
  const quoteUrl2 = "https://quote-garden.herokuapp.com/api/v3/quotes/random";
  fetch(quoteUrl2)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const shownQuote2 = data.data[0].quoteText;
      let shownAuthor2 = data.data[0].quoteAuthor;
      quoteEl2.innerText = shownQuote2;
      authorEl2.innerText = shownAuthor2;
    });
});
const but3 = document.querySelector("#but3");
const quoteEl3 = document.querySelector("#quote3");
const authorEl3 = document.querySelector("#author3");

but3.addEventListener("click", function () {
  const quoteUrl3 = "https://quote-garden.herokuapp.com/api/v3/quotes/random";
  fetch(quoteUrl3)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const shownQuote3 = data.data[0].quoteText;
      let shownAuthor3 = data.data[0].quoteAuthor;
      quoteEl3.innerText = shownQuote3;
      authorEl3.innerText = shownAuthor3;
    });
});
