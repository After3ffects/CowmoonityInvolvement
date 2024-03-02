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

const finishCreateJobForm = () => {
    document.body.classList.toggle('activeForm');
    const title = (document.getElementById("createJobTitle")).value;
    const description = (document.getElementById("createJobDescription")).value;
    const amount = (document.getElementById("createJobAmount")).value;
    const email = (document.getElementById("createJobEmail")).value;
    console.log(title);
    console.log(description);
    console.log(amount);
    console.log(email);
    const newJobObject = document.createElement("div");
    newJobObject.setAttribute("class", "oddJobObject");
    
    const objectTitle = document.createElement("h3");
    const titleText = document.createTextNode(title);
    objectTitle.appendChild(titleText);

    const objectDescription = document.createElement("p");
    const descriptionText = document.createTextNode(description);
    objectDescription.appendChild(descriptionText);

    const objectAmount = document.createElement("p");
    const amountText = document.createTextNode(amount);
    objectAmount.appendChild(amountText);

    const objectEmail = document.createElement("p");
    const emailText = document.createTextNode(email);
    objectEmail.appendChild(emailText);

    newJobObject.appendChild(objectTitle);
    newJobObject.appendChild(objectDescription);
    newJobObject.appendChild(objectAmount);
    newJobObject.appendChild(objectEmail);

    document.getElementById("content").appendChild(newJobObject);

    userCount = userCount - amount;
    updateUserCount();
    
}

