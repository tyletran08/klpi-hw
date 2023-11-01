let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const userName = prompt("Please enter your name.");
    if (!userName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", userName);
        myHeading.textContent = `Hi ${userName}, Welcome to KLPI Homework!`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedUserName = localStorage.getItem("name");
    myHeading.textContent = `Hi ${storedUserName}, Welcome to KLPI Homework!`;
}

myButton.onclick = () => {
    setUserName();
}