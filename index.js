let letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector('.letters');

lettersArray.forEach(letter => {
    let span = document.createElement('span');
    span.textContent = letter;
    span.className = 'letter-box';
    lettersContainer.appendChild(span);
});


