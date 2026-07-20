
// Jeffrey Osterkamp, July 19, 2026

// STEP 1: SELECT ELEMENTS

const moodDisplay = document.querySelector("#moodDisplay");


const quote = document.querySelector("#quote");


const happyBtn = document.querySelector("#happyBtn");
const calmBtn = document.querySelector("#calmBtn");
const angryBtn = document.querySelector("#angryBtn");
const sleepyBtn = document.querySelector("#sleepyBtn");
// Random button
const randomBtn = document.querySelector("#randomBtn");

// STEP 2: Create Data Object


const moods = {
    happy: {
        name: "Happy",
        bg: "#FFD700",
        text: "#bd26b0",
        message: "Happy Happy, Joy Joy!"
    },

    calm: {
        name: "Calm",
        bg: "#B8E6E6",
        text: "#21456d",
        message: "Just Chill"
    },

    angry: {
        name: "Angry",
        bg: "#C62828",
        text: "#FFFFFF",
        message: "Take a deep breath and let it out."
    },

    sleepy: {
        name: "Sleepy",
        bg: "#4B3F72",
        text: "#F5F1FF",
        message: "Bedtime!"
    }

};


// STEP 3: CREATE THE FUNCTION THAT CHANGES THE PAGE


function changeMood(moodName) {
    
    const mood = moods[moodName];

    document.body.style.backgroundColor = mood.bg;
    document.body.style.color = mood.text;
    quote.textContent = mood.message;

    moodDisplay.textContent = mood.name;

    console.log("Mood selected:", moodName);
    console.log("Mood settings:", mood);
}

function handleRandomClick() {

    const moodNames = Object.keys(moods);

    const randomMood =
        moodNames[Math.floor(Math.random() * moodNames.length)];

    console.log("Random mood:", randomMood);

    changeMood(randomMood);
}

// STEP 4: Event Handler// 

function handleHappyClick() {
    changeMood("happy");
}


function handleCalmClick() {
    changeMood("calm");
}


function handleAngryClick() {
    changeMood("angry");
}

function handleSleepyClick() {
    changeMood("sleepy");
}


// STEP 5: Event Listener

happyBtn.addEventListener("click", handleHappyClick);
calmBtn.addEventListener("click", handleCalmClick);
angryBtn.addEventListener("click", handleAngryClick);
sleepyBtn.addEventListener("click", handleSleepyClick);
randomBtn.addEventListener("click", handleRandomClick);
