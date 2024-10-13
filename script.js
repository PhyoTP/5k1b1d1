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

        let targetX = 0, targetY = 0;
        let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            targetX = event.clientX - ksi.width / 2;
            targetY = event.clientY - ksi.height / 2;
        });

        function chaseCursor() {
            currentX += (targetX - currentX) * 0.1;
            currentY += (targetY - currentY) * 0.1;
            ksi.style.left = `${currentX}px`;
            ksi.style.top = `${currentY}px`;
            requestAnimationFrame(chaseCursor);
        }

        chaseCursor();
        document.getElementById("thickOfIt").play();
    }, 
    () => {
        let skibidi = document.createElement('img');
        skibidi.src = "https://m.media-amazon.com/images/M/MV5BNjAzOGMxYjUtM2QxMy00NTBiLWI5NjEtNjI3OTcwMjQ0OTQ2XkEyXkFqcGdeQXVyMTE3MTc5NDA5._V1_FMjpg_UX1000_.jpg";
        skibidi.style.width = '150px'; // Set the size of the image
        skibidi.style.height = '150px';
        skibidi.style.position = 'absolute'; // Position it absolutely
        skibidi.style.pointerEvents = 'none'; // Prevent blocking clicks
        document.body.appendChild(skibidi);

        let targetX = 0, targetY = 0;
        let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            targetX = event.clientX - skibidi.width / 2;
            targetY = event.clientY - skibidi.height / 2;
        });

        function chaseCursor() {
            currentX += (targetX - currentX) * 0.1;
            currentY += (targetY - currentY) * 0.1;
            skibidi.style.left = `${currentX}px`;
            skibidi.style.top = `${currentY}px`;
            requestAnimationFrame(chaseCursor);
        }

        chaseCursor();
        document.getElementById("skibidi").play();
    }
];

// Function to get 3 random unique functions from the array, also returns their indices
function getRandomActions(arr, num) {
    const shuffledIndices = [...Array(arr.length).keys()].sort(() => 0.5 - Math.random());
    return shuffledIndices.slice(0, num).map(index => ({ action: arr[index], index }));
}

// Get 3 random actions for the doors
const randomActions = getRandomActions(actions, 3);

// Assign each random action to a door button
document.getElementById("door1").addEventListener('click', randomActions[0].action);
document.getElementById("door2").addEventListener('click', randomActions[1].action);
document.getElementById("door3").addEventListener('click', randomActions[2].action);

// Find out which door has the first action from the original array
let doorWithFirstAction = null;

if (randomActions[0].index === 0) {
    doorWithFirstAction = 1;
} else if (randomActions[1].index === 0) {
    doorWithFirstAction = 2;
} else if (randomActions[2].index === 0) {
    doorWithFirstAction = 3;
}


// Riddles
const riddles = {
    1: [
        "I'm the odd one out, not prime, not composite,<br>You'll find me alone, unique, yet modest.",
        "Divide by me, and the result's still one,<br>A circle's beginning, where the math is done."
    ],
    2: [
        "I'm even and prime, the only of my kind,<br>Two factors I have, no others you'll find.",
        "When doubled, I match my own squared score,<br>Multiply me by myself, and you'll get no more."
    ],
    3: [
        "I'm the base of the simplest shape, sharp and true,<br>Count my sides: a triangle has just me and two.",
        "First came two, and then there was me,<br>The second prime, as simple as can be."
    ]
};

let paper = document.getElementById("paper");
function clue(num){
    paper.innerHTML = riddles[doorWithFirstAction][num];
}