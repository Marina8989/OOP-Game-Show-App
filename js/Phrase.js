// class Phrase{
//     constructor(phrase) {
//        this.phrase = phrase.toLowerCase();
//     }
//     addPhraseToDisplay() {
//         const ul = document.querySelector('#phrase ul');
//         //use .split() in order to be able to loop through each character in the string
//         const phrase = this.phrase.split('');
//         phrase.forEach(letter => {
//             const li = document.createElement('li');
//             li.textContent = letter;
//             if(letter === '') {
//                li.className = 'space';
//             }else {
//                 li.className = `hide letter ${letter}`;
//             }
//           ul.appendChild(li);
//         });
//     }
//     checkLetter(letter) {
//        return this.phrase.includes(letter);
//     }
//     showMatchedLetter(letter){
//      const liLetters = document.querySelectorAll('#phrase .letter');
//        liLetters.forEach(character => {
//            if(character.textContent === letter) {
//                character.classList.remove('hide');
//                character.classList.add('show');
//                character.classList.add('animated');
//                character.classList.add('tada');
//            }
//        });
//     }
// }



class Phrase {
    constructor(phrase) {
       this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
      const phraseDiv = document.querySelector('#phrase');
      const phraseArr = this.phrase.split('');
      phraseArr.forEach(character => {
          const li = document.createElement('li');
           li.textContent = character;
          if(character === '') {
            li.className = 'space';
          }else {
            li.className = `hide letter ${character}`;
          }
          phraseDiv.appendChild(li);
      });
    }

    checkLetter(character){
      return this.phrase.includes(character);
    }
    showMatchedLetter(character) {
        const letters = document.querySelectorAll('#phrase .letter');
        letters.forEach(letter => {
            if(letter.textContent === character) {
              letter.classList.remove('hide');
              letter.classList.add('show');
            }
        });
    }
}

