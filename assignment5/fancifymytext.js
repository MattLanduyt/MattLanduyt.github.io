// Test alert function
function showAlert() {
    alert("Hello, world!");
}

// Function to increase the text size
function makeTextBigger() {
    const textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}

// Function to handle FancyShmancy/BoringBetty styles
function toggleStyle() {
    const textArea = document.getElementById("textArea");
    const fancy = document.getElementById("fancyShmancy").checked;

    if (fancy) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to uppercase text and add '-Moo' suffix
function addMoo() {
    const textArea = document.getElementById("textArea");
    let sentences = textArea.value.split(".");
    sentences = sentences.map(sentence => sentence.trim().toUpperCase() + "-Moo");
    textArea.value = sentences.join(". ");
}

// Event listeners
document.getElementById("biggerButton").onclick = makeTextBigger;
document.getElementById("fancyShmancy").onchange = toggleStyle;
document.getElementById("boringBetty").onchange = toggleStyle;
document.getElementById("mooButton").onclick = addMoo;
