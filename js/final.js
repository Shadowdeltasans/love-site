const loveWords = [
    "I love you", "Je t'aime", "Ti amo", "Te quiero",
    "Ich liebe dich", "Eu te amo", "Seni seviyorum",
    "Я тебя люблю", "我爱你", "أحبك", "Saranghae",
    "Nakupenda", "Mahal kita", "Aishiteru", "Volim te",
    "S'agapo", "Miluji tě", "Te iubesc", "Ljubim te",
    "Ik hou van jou", "Jag älskar dig", "Kocham cię",
    "Milujem ťa", "Szeretlek", "Mimi nakupenda"
];

function randomColor() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 40 + 60);
    const l = Math.floor(Math.random() * 30 + 40);
    return `hsl(${h}, ${s}%, ${l}%)`;
}

const container = document.getElementById("words-container");
const hint = document.getElementById("hint");
const mainMessage = document.getElementById("main-message");
const endMessage = document.getElementById("end-message");

let delay = 800;
let started = false;
let spawnCount = 0;

function spawnWord() {
    const word = loveWords[Math.floor(Math.random() * loveWords.length)];

    const span = document.createElement("span");
    span.textContent = word;
    span.style.color = randomColor();
    span.style.left = Math.random() * 90 + "%";
    span.style.top = Math.random() * 90 + "%";
    span.style.fontSize = (Math.random() * 20 + 12) + "px";

    container.appendChild(span);
    spawnCount++;

    // Après 60 mots apparus, on affiche le message final
    if (spawnCount === 60) {
        endMessage.classList.add("visible");
    }

    delay = Math.max(50, delay * 0.95);
    setTimeout(spawnWord, delay);
}

mainMessage.addEventListener("click", function() {
    if (started) return;
    started = true;
    hint.style.display = "none";
    spawnWord();
});
