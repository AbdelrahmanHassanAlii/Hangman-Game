let letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector('.letters');

lettersArray.forEach(letter => {
    let span = document.createElement('span');
    span.textContent = letter;
    span.className = 'letter-box';
    lettersContainer.appendChild(span);
});

// Object Of Words + Categories
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}
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

document.querySelector('.game-info .category span').innerHTML = randomPropName;

console.log(allKeys);
console.log(randomPropNumber);
console.log(randomPropName);
console.log(randomPropValue);
console.log(randomValueNumber);
console.log(randomValueValue);

let lettersGuessContainer =  document.querySelector('.letters-guess');

let lettersAndSpace = Array.from(randomValueValue)
console.log(lettersAndSpace);

lettersAndSpace.forEach(letter => {
    let emptySpan = document.createElement('span');
    if(letter === ' '){
        emptySpan.className = 'with-space';
    }
    lettersGuessContainer.appendChild(emptySpan);
});

document.addEventListener('click', (e) => {
    if(e.target.className === 'letter-box'){
        e.target.classList.add('clicked');
        let theClickedLetter = e.target.innerHTML.toLowerCase();
        console.log(theClickedLetter);
    }
    
});

