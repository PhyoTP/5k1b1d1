const actions = [
	() => window.location.href = "https://manor.hackclub.com", 
	() => {
		let ksi = document.createElement('img');
		ksi.src = "https://preview.redd.it/qeq7lgud5po51.jpg?auto=webp&s=a3a9534425966bc6293fc1982b026af46a1255f2";
		ksi.style.width = '150px'; // Set the size of the image
		ksi.style.height = '150px';
		ksi.style.position = 'absolute'; // Position it absolutely
		ksi.style.pointerEvents = 'none'; // Prevent blocking clicks
		document.body.appendChild(ksi);

		// Variables to store target and current positions
		let targetX = 0, targetY = 0;
		let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;

		// Update target position on mouse move
		document.addEventListener('mousemove', (event) => {
			targetX = event.clientX - ksi.width / 2; // Center horizontally
			targetY = event.clientY - ksi.height / 2; // Center vertically
		});

		// Function to gradually move the image closer to the target position
		function chaseCursor() {
			// Interpolate towards the target position (this creates a smooth movement)
			currentX += (targetX - currentX) * 0.1; // Adjust the speed with the factor (0.1 for slow)
			currentY += (targetY - currentY) * 0.1;

			// Set the new position
			ksi.style.left = `${currentX}px`;
			ksi.style.top = `${currentY}px`;

			// Request the next animation frame
			requestAnimationFrame(chaseCursor);
		}

		// Start the chasing animation
		chaseCursor();
		document.getElementById("thickOfIt").play();
	}, 
	() => {
		let skibidi = document.createElement('img');
		skibidi.src = "https://static.wikia.nocookie.net/skibidi-toilet-official/images/b/b1/GiantST.png/revision/latest?cb=20240205231829";
		skibidi.style.width = '150px'; // Set the size of the image
		skibidi.style.height = '150px';
		skibidi.style.position = 'absolute'; // Position it absolutely
		skibidi.style.pointerEvents = 'none'; // Prevent blocking clicks
		document.body.appendChild(skibidi);

		// Variables to store target and current positions
		let targetX = 0, targetY = 0;
		let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;

		// Update target position on mouse move
		document.addEventListener('mousemove', (event) => {
			targetX = event.clientX - skibidi.width / 2; // Center horizontally
			targetY = event.clientY - skibidi.height / 2; // Center vertically
		});

		// Function to gradually move the image closer to the target position
		function chaseCursor() {
			// Interpolate towards the target position (this creates a smooth movement)
			currentX += (targetX - currentX) * 0.1; // Adjust the speed with the factor (0.1 for slow)
			currentY += (targetY - currentY) * 0.1;

			// Set the new position
			skibidi.style.left = `${currentX}px`;
			skibidi.style.top = `${currentY}px`;

			// Request the next animation frame
			requestAnimationFrame(chaseCursor);
		}

		// Start the chasing animation
		chaseCursor();
		document.getElementById("skibidi").play();
	}
];

// Function to get 3 random unique functions from the array
function getRandomActions(arr, num) {
	let shuffled = arr.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

// Get 3 random actions for the doors
const randomActions = getRandomActions(actions, 3);

// Assign each random action to a door button
document.getElementById("door1").addEventListener('click', randomActions[0]);
document.getElementById("door2").addEventListener('click', randomActions[1]);
document.getElementById("door3").addEventListener('click', randomActions[2]);

