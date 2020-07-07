class Phrase{
    constructor(phrase) {
       this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        const ul = document.querySelectoer('#phrase ul');
        //use .split() in order to be able to loop through each character in the string
        const phrase = this.phrase.split('');
        phrase.forEach(letter => {
            const li = document.createElement('li');
            li.textContent = letter;
            if(letter === '') {
               li.className = 'space';
            }else {
                li.className = `hide letter ${letter}`;
            }
          ul.appendChild(li);
        });
    }
    checkLetter(letter) {
       return this.phrase.includes(letter);
    }
    showMatchedLetter(letter){
     const liLetters = document.querySelectorAll('#phrase.letter');
       liLetters.forEach(character => {
           if(character.textContent === letter) {
               character.classList.remove('hide');
               character.classList.add('show');
           }
       });
    }
}


// <div id="phrase" class="section">
//   <ul>
//     <li class="hide letter h">h</li>
//     <li class="hide letter o">o</li>
//     <li class="hide letter w">w</li>
//     <li class="space"> </li>
//     <li class="hide letter a">a</li>
//     <li class="hide letter r">r</li>
//     <li class="hide letter e">e</li>
//     <li class="space"> </li>
//     <li class="hide letter y">y</li>
//     <li class="hide letter o">o</li>
//     <li class="hide letter u">u</li>
//   </ul>
// </div>;