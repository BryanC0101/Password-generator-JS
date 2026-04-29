let password = document.getElementById("password-area");
let range = document.getElementById("range-area");
let rangeCount = document.getElementById("range-count");
let checkNum = document.getElementById("checkNum");
let checkSymbols = document.getElementById("checkSymbols");
let checkLetterLower = document.getElementById("checkLetterLower");
let copyBtn = document.getElementById("copyBtn");
let letterIndex;


function textGenerator(time) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$*_-"
    let pass_word = []
    let charsUpper = chars.slice(0,26)
    let charsLower = chars.slice(26,52)
    let charsNum = chars.slice(52,62)
    let charsSymbols = chars.slice(62)
    time = range.value;

    if (!checkLetterUpper.checked) {
        chars = chars.replace(charsUpper, "");
    }
    if (!checkLetterLower.checked) {
        chars = chars.replace(charsLower, "");
    }
    if (!checkNum.checked) {
        chars = chars.replace(charsNum, "");
    }
    if (!checkSymbols.checked) {
        chars = chars.replace(charsSymbols, "");
    }

    console.log(chars);
    for (let i = 0; i < time; i++) {
        let indexChar = Math.floor(Math.random() * chars.length);
        let char = chars[indexChar];
        pass_word.push(char);
    }
    password.innerText = pass_word.join("")
   
}

range.addEventListener("input", () => {
    rangeCount.innerHTML = range.value;
});


checkLetterLower.addEventListener("input", () => {
    
})

checkLetterUpper.addEventListener("input", () => {
    
})

checkNum.addEventListener("input", () => {
    
})


checkSymbols.addEventListener("input", () => {
    
})
