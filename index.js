let letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach((letter) => {
  let span = document.createElement("span");
  span.textContent = letter;
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});

// Object Of Words + Categories
const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};
//get the all keys of myObject
let allKeys = Object.keys(words);
//get a random number depends on the keys lenght
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
//get a random key
let randomPropName = allKeys[randomPropNumber];
//get all values of the random key
let randomPropValue = words[randomPropName];
//get a random number depends on the values lenght
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
//get a randon value
let randomValueValue = randomPropValue[randomValueNumber];

document.querySelector(".game-info .category span").innerHTML = randomPropName;

console.log(allKeys);
console.log(randomPropNumber);
console.log(randomPropName);
console.log(randomPropValue);
console.log(randomValueNumber);
console.log(randomValueValue);

let lettersGuessContainer = document.querySelector(".letters-guess");

let lettersAndSpace = Array.from(randomValueValue);
console.log(lettersAndSpace);

lettersAndSpace.forEach((letter) => {
  let emptySpan = document.createElement("span");
  if (letter === " ") {
    emptySpan.className = "with-space";
  } else {
    emptySpan.className = "letter";
  }
  emptySpan.textContent = " ";
  lettersGuessContainer.appendChild(emptySpan);
});

let theChosenWord = Array.from(randomValueValue.toLowerCase());
console.log(lettersAndSpace);
console.log(theChosenWord);

let guessSpans = document.querySelectorAll(".letters-guess span");

let wrongAttemps = 0;

let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
  let theStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let theClickedLetter = e.target.innerHTML.toLowerCase();
    console.log(theClickedLetter);
    theChosenWord.forEach((wordLetter, wordIndex) => {
      if (wordLetter === theClickedLetter) {
        console.log(`found at index ${wordIndex}`);
        theStatus = true;
        guessSpans.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });
    console.log(theStatus);
    if (theStatus === false) {
      wrongAttemps++;
      theDraw.classList.add(`wrong-${wrongAttemps}`);
      document.getElementById("fail").play();

      if (wrongAttemps === 8) {
        setTimeout(() => {
          failling();
        }, 1000);
        lettersContainer.classList.add("finished");
        document.getElementById("killed").play();
      }
    } else {
      document.getElementById("success").play();
    }
  }

  let mySpans = document.querySelectorAll(".letter");
  let allSpansContainLetter = true;
  mySpans.forEach((span) => {
    const text = span.textContent || span.innerText;
    if (!text.trim()) {
      allSpansContainLetter = false;
      return;
    }
  });

  if (allSpansContainLetter === true && wrongAttemps < 8) {
    lettersContainer.classList.add("finished");
    setTimeout(() => {
      winning();
    }, 1000);
  }
});

function failling() {
  // Create overlay
  let overlay = document.createElement("div");
  overlay.className = "overlay";
  // Create Popup Div
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(
    `Game Over, The Word Is ${randomValueValue}`
  );

  // Append Text To Div
  div.appendChild(divText);

  let button = document.createElement("button");
  button.className = "btn";
  button.innerHTML = "Try Again";
  button.addEventListener("click", () => {
    window.location.reload();
  });

  let exit = document.createElement("button");
  exit.className = "exit";
  exit.innerHTML = "Exit";
  exit.addEventListener("click", () => {
    window.close();
  });

  div.appendChild(button);
  div.appendChild(exit);

  // Add Class On Div
  div.className = "popup";

  // Append To The Body
  overlay.appendChild(div);
  document.body.appendChild(overlay);
}

function winning() {
  // Create overlay
  let overlay = document.createElement("div");
  overlay.className = "overlay";


  // Create Popup Div
  let div = document.createElement("div");
  // Create Text
  div.textContent = "Winner, Cogratulation";

  let p = document.createElement("p");
  // Create Text
  p.textContent = `With ${wrongAttemps} Times Wrong`;
  // Append Text To Div
  div.appendChild(p);

  let button = document.createElement("button");
  button.className = "btn";
  button.innerHTML = "Play Again";
  button.addEventListener("click", () => {
    window.location.reload();
  });

  let exit = document.createElement("button");
  exit.className = "exit";
  exit.innerHTML = "Exit";
  exit.addEventListener("click", () => {
    window.close();
  });

  div.appendChild(button);
  div.appendChild(exit);

  // Add Class On Div
  div.className = "popup";

  // Append To The Body
  overlay.appendChild(div);
  document.body.appendChild(overlay);
}
