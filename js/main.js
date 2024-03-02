async function updateQuote() {
    let quoteData;

    const res = await fetch('./CowQuotes.json')

    quoteData = await res.json();
    quoteData= quoteData["Quotes"]
    let quote = quoteData[Math.floor(Math.random() * (quoteData.length+1))]
    document.getElementById("navQuote").innerHTML = quote
}

updateQuote();