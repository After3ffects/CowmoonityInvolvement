async function updateQuote() {
    let quoteData;

    const res = await fetch('./CowQuotes.json')

    quoteData = await res.json();
    quoteData= quoteData["Quotes"];
    let index = Math.floor(Math.random() * (quoteData.length));
    let quote = quoteData[index];
    document.getElementById("headerQuote").innerHTML = quote;
    console.log(index);
}

updateQuote();