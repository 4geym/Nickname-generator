const text = document.querySelector('#text')
const btn = document.querySelector('button')

random()
btn.addEventListener('click', random)

function random() {
    const charVowels = 'AEIOUY';
    const charConsonants = 'BCDFGHJKLMNPQRSTVWXZ';
    const randomLength = Math.floor(Math.random() * (5 - 2) + 2);

    let str = '';
    let mass = [];
    
    //random symbols
    for(let i = 0; i < randomLength; i++) {
        str += charConsonants.charAt(Math.floor(Math.random() * charConsonants.length));
        str += charVowels.charAt(Math.floor(Math.random() * charVowels.length));
    }
    //word to locale lower case
    for(let i = 1; i < str.length; i++) {
         mass[i] = str[i].toLocaleLowerCase()
    }

    text.innerHTML = str[0] + mass.join("");
}