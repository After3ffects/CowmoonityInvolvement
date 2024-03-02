async function updateQuote() {
    let quoteData;

    const res = await fetch('https://api.quotable.io/quotes/random?tags=motivational')

    quoteData = await res.json();
    quoteData = quoteData["0"];
    let quote = quoteData["content"];
    let author = quoteData["author"];
    document.getElementById("quoteElement").innerHTML = quote;
    document.getElementById("authorElement").innerHTML = author;
    console.log("ran")
}

updateQuote();