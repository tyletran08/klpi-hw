let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "../images/hw1/smile.png") {
        myImage.setAttribute("src", "../images/hw1/boop.png");
    }
    else {
        myImage.setAttribute("src", "../images/hw1/smile.png");
    }
};

function setUserName() {
    const userName = prompt("Please enter your name.");
    if (!userName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", userName);
        myHeading.textContent = `Hi ${userName}, Welcome to KLPI Homework 1!`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedUserName = localStorage.getItem("name");
    myHeading.textContent = `Hi ${storedUserName}, Welcome to KLPI Homework 1!`;
}

myButton.onclick = () => {
    setUserName();
}