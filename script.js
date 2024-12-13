// Fetching all the elements with the class "animate_letters"
let animateObjects = document.getElementsByClassName("animate_letters");

// Setting up random string to replace the target text
let randomString = "1234567890qwertyuiop[]!@#$%^&*()asdfghjkl;'zxcvnm,./>?:";

// Looping through all the animateObjects and adding event listeners to them
for (let obj of animateObjects) {
    let orgText = obj.textContent;
    obj.addEventListener("mouseover", () => {
        animateLetters(obj);
        setTimeout(() => {
            animateBack(orgText, obj);
        },  12 * 30);
    })
}

// Fetching random string to replace the target text
function randomReplacement(text) {
    let len = text.length;
    text = "";
    for (let i = 0; i < len; i++) {
        let temp = randomString[Math.floor(Math.random() * randomString.length)];
        text += temp;
    }
    return text
}

// Animates text by replacing it with random characters 12 times at 30ms intervals
// This function is called when the user hovers over the target text
function animateLetters(obj) {
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            obj.textContent = randomReplacement(obj.textContent);
        }, i * 30);
    }
}

// Animates text back to its original state (while replacing the characters to the right with random characters) 12 times at 30ms intervals
// This function is called when the user hovers out of the target text
function animateBack(orgText, obj) {
    let preText = "";
    for (let i = 0; i < orgText.length; i++) {
        let temp = orgText[i];
        setTimeout(() => {
            preText += temp;
            obj.textContent = preText + randomReplacement(obj.textContent.slice(i+1));
        }, i * 40)
    }
}