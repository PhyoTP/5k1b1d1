// Array of possible URLs
const links = [
	"https://hack.club/boba-manor",
	"https://youtu.be/At8v_Yc044Y?si=wPqymTxUSfcYQKNS",
	"https://youtu.be/tzD9OxAHtzU?si=a3ZI0govBxLBQDFx"
];

// Function to get 3 random unique links
function getRandomLinks(arr, num) {
	let shuffled = arr.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

// Assign random links to the 3 doors
const randomLinks = getRandomLinks(links, 3);

document.getElementById("door1").href = randomLinks[0];
document.getElementById("door2").href = randomLinks[1];
document.getElementById("door3").href = randomLinks[2];