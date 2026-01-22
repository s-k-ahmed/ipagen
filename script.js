let guessSubmitEl = document.getElementById('level-submit');
guessSubmitEl.onclick = () => {updateWords()};

function updateWords() {
    let outputEl = document.getElementById('output');
    let cLevel = parseInt(document.getElementById('csel').value);
    let vLevel = parseInt(document.getElementById('vsel').value);

    let word1 = pickRandomPhone(cLevel, "consonant") + pickRandomPhone(0, "vowel") + pickRandomPhone(0, "consonant");
    
    let word2 = pickRandomPhone(0, "consonant") + pickRandomPhone(vLevel, "vowel") + pickRandomPhone(0, "consonant");

    let word3 = pickRandomPhone(0, "consonant") + pickRandomPhone(0, "vowel") + pickRandomPhone(cLevel, "consonant") + pickRandomPhone(0, "vowel");

    let word4 = pickRandomPhone(0, "consonant") + pickRandomPhone(0, "vowel") + pickRandomPhone(cLevel, "consonant") + pickRandomPhone(0, "vowel");

    let word5 = pickRandomPhone(0, "consonant") + pickRandomPhone(vLevel, "vowel") + pickRandomPhone(0, "consonant") + pickRandomPhone(0, "vowel");

    outputEl.innerHTML = word1 + "<br>" + word2 + "<br>" + word3 + "<br>" + word4 + "<br>" + word5
}

function pickRandomPhone(level, type) {
    let rLevel = Math.floor(Math.random() * (level + 1));
    let options = SYMBOLS.filter(v => v.level == rLevel && v.type == type);
    let r = Math.random();
    let rIndex = Math.floor(r * options.length);

    let picked = options[rIndex];

    return picked.symbol;
}