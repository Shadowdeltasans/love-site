const loveWords = [
    "I love you", "Je t'aime", "Ti amo", "Te quiero",
    "Ich liebe dich", "Eu te amo", "Seni seviyorum",
    "Я тебя люблю", "我爱你", "أحبك", "Saranghae",
    "Nakupenda", "Mahal kita", "Aishiteru", "Volim te",
    "S'agapo", "Miluji tě", "Te iubesc", "Ljubim te",
    "Ik hou van jou", "Jag älskar dig", "Kocham cię",
    "Milujem ťa", "Szeretlek", "Mimi nakupenda"
];

const heartPoints = [];
for (let t = 0; t < Math.PI * 2; t += 0.07) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
    heartPoints.push({ x, y });
}

let pointIndex = 0;

const input = document.getElementById("user-input");
const container = document.getElementById("heart-container");
const finalMessage = document.getElementById("final-message");

input.addEventListener("keydown", function(event) {
    if (event.key === " " || event.key === "Enter") {
        const typed = input.value.trim();
        input.value = "";
        if (typed === "") return;
        if (pointIndex >= heartPoints.length) return;

        const randomLove = loveWords[Math.floor(Math.random() * loveWords.length)];
        const point = heartPoints[pointIndex];
        pointIndex++;

        const span = document.createElement("span");
        span.textContent = randomLove;
        span.style.left = (point.x * 10 + 200) + "px";
        span.style.top  = (point.y * 10 + 150) + "px";
        container.appendChild(span);

        // Quand le coeur est complet — tous les mots se mettent à briller
        if (pointIndex >= heartPoints.length) {
            container.classList.add("heart-glow");
            finalMessage.style.display = "block";
        }
    }
});
