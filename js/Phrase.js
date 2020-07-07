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
    checkLetter() {

    }
    showMatchedLetter(){}
}

