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

let navAbout = document.getElementById("navAbout");
function bottomFunction() {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
}

const toggleCreateJobForm = () => {
    document.body.classList.toggle('activeForm');
}

let userCount = 100;
const updateUserCount = () => {
    document.getElementById("headerCountValue").innerHTML = userCount;
}

updateUserCount();


