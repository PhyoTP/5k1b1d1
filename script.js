const actions = [
    () => window.location.href = "https://manor.hackclub.com", 
    () => initChaser("https://preview.redd.it/qeq7lgud5po51.jpg?auto=webp&s=a3a9534425966bc6293fc1982b026af46a1255f2","thickOfIt"), 
    () => initChaser("https://m.media-amazon.com/images/M/MV5BNjAzOGMxYjUtM2QxMy00NTBiLWI5NjEtNjI3OTcwMjQ0OTQ2XkEyXkFqcGdeQXVyMTE3MTc5NDA5._V1_FMjpg_UX1000_.jpg","skibidi")
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
function initChaser(png, id) {
    let chaser = document.createElement('img');
    chaser.src = png;
    chaser.style.width = '150px';
    chaser.style.height = '150px';
    chaser.style.position = 'absolute';
    chaser.style.pointerEvents = 'none';
    chaser.style.zIndex = 2;
    document.body.appendChild(chaser);

    let targetX = window.innerWidth, targetY = window.innerHeight / 2;
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;
    let isOnObstacle = false; // Flag to check if the mouse is on an obstacle

    document.addEventListener('mousemove', (event) => {
        // Check if the mouse is on an obstacle
        isOnObstacle = isMouseOnObstacle(event.clientX, event.clientY);
        
        // Update target position only if not on an obstacle
        if (!isOnObstacle) {
            targetX = event.clientX - chaser.width / 2;
            targetY = event.clientY - chaser.height / 2;
        }
    });

    function isMouseOnObstacle(mouseX, mouseY) {
        let closets = document.getElementsByClassName("closet");
        for (let closet of closets) {
            let closetRect = closet.getBoundingClientRect();
            if (
                mouseX > closetRect.left &&
                mouseX < closetRect.right &&
                mouseY > closetRect.top &&
                mouseY < closetRect.bottom
            ) {
                return true; // Mouse is on an obstacle
            }
        }
        return false; // Mouse is not on any obstacle
    }

    function chaseCursor() {
        if (!isOnObstacle) { // Only move chaser if the mouse is not on an obstacle
            currentX += (targetX - currentX) * 0.01;
            currentY += (targetY - currentY) * 0.01;
        }
        chaser.style.left = `${currentX}px`;
        chaser.style.top = `${currentY}px`;
        requestAnimationFrame(chaseCursor);
    }

    chaseCursor();
    document.getElementById(id).play();
}
