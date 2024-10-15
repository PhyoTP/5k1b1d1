// Function to get query parameters from the URL
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Retrieve 'door' and 'chaser' from query parameters
const doorNumber = getQueryParameter("door");
const chaserID = getQueryParameter("chaser");
const tips = ["Try checking the drawers for clues", "Hide in the closets from the entities"]
// Check if both doorNumber and chaserID are available
if (chaserID && doorNumber) {
    if (chaserID === "skibidi") {
        chaserDeath("https://m.media-amazon.com/images/M/MV5BNjAzOGMxYjUtM2QxMy00NTBiLWI5NjEtNjI3OTcwMjQ0OTQ2XkEyXkFqcGdeQXVyMTE3MTc5NDA5._V1_FMjpg_UX1000_.jpg", "skibidi");
    } else if (chaserID === "thickOfIt") {
        chaserDeath("https://preview.redd.it/qeq7lgud5po51.jpg?auto=webp&s=a3a9534425966bc6293fc1982b026af46a1255f2", "ksi");
    }
}

// Function to create and animate the chaser
function chaserDeath(src, id) {
    // Create the image element
    const chaser = document.createElement('img');
    chaser.src = src;
    chaser.style.height = "50px";
    chaser.style.width = "50px";
    chaser.style.position = "absolute";
    chaser.style.left = "50%";
    chaser.style.top = "50%";
    chaser.style.transform = "translate(-50%, -50%)"; // Center the image
    chaser.style.transition = "all 2s ease-out"; // Smooth animation for growing effect
    chaser.style.zIndex = 1000; // Ensure it's on top of other elements

    // Append the chaser to the body
    document.body.append(chaser);

    // Function to handle expanding the image and playing audio
    function expand() {
        // Play the media element if it exists
        const mediaElement = document.getElementById(id);
        if (mediaElement) {
            mediaElement.play();
        }

        // Start growing the image after a small delay to allow the append operation
        setTimeout(() => {
            chaser.style.height = "100vmax"; // Set the height to fill the entire screen
            chaser.style.width = "100vmax"; // Set the width to fill the entire screen
        }, 10);

        // Remove the image once the animation is done
        chaser.addEventListener('transitionend', () => {
			function appear(msg){
				msg.style.opacity = "0";
				msg.style.fontFamily = "Jacques Francois Shadow";
				msg.style.color = "#fff"; // Ensure the text is visible on a dark background
				msg.style.transition = "opacity 2s"; // Smooth fade-in effect
				
				// Append the msg to the body
				document.body.append(msg);

				// Trigger the fade-in effect
				setTimeout(() => {
					msg.style.opacity = "1";
				}, 10);
				
			}
            chaser.remove(); // Remove the element from the DOM after animation ends

            // Create the title element
            const title = document.getElementById("title");
            title.innerText = `You died to ${id}`;
            appear(title);
			title.addEventListener("transitionend", () => {
				if (!document.getElementById("corDoor")){
					const corDoor = document.createElement("h1");
					corDoor.id = "corDoor";
					corDoor.innerText = `The correct door was Door ${doorNumber}`;
					appear(corDoor);
					corDoor.addEventListener("transitionend", () => {
						if (!document.getElementById("tip")){
							const tip = document.createElement("h1");
							tip.id = "tip";
							tip.innerText = tips[Math.floor(Math.random() * tips.length)];
							appear(tip);
							tip.addEventListener("transitionend", () => {
								if (!document.getElementById("back")){
									const back = document.createElement("button");
									back.id = "back";
									back.innerText = "Try Again";
									back.onclick = history.back();
									appear(back);
									
								}
							})
						}
					})
				}
			})
        });
    }

    // Set the click event to trigger the expand function
    chaser.onclick = expand;
}

