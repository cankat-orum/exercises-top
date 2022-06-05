const pTag = document.createElement("p");
pTag.textContent = "Hey I'm Red!";
pTag.style.color = "red";

const h3Tag = document.createElement("h3");
h3Tag.textContent = "I'm Blue Ladida!";
h3Tag.style.color = "blue";

const divTag = document.createElement("div");
divTag.style.backgroundColor = "pink";
divTag.style.border = "solid";

const h1Tag = document.createElement("h1");
h1Tag.textContent = "I'm in a DIV";

const pTag02 = document.createElement("p");
pTag02.textContent = "Me Too!!!";

divTag.appendChild(h1Tag);
divTag.appendChild(pTag02);

const divDOM = document.querySelector(".content");
divDOM.appendChild(pTag);
divDOM.appendChild(h3Tag);
divDOM.appendChild(divTag);
