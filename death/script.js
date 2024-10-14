function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const doorNumber = getQueryParameter("door");
const chaserID = getQueryParameter("chaser");

let one = document.createElement('h1');
one.innerText = doorNumber;
document.body.append(one);
let two = document.createElement('h1');
two.innerText = chaserID;
document.body.append(two);
