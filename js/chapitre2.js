// Toutes les façons de dire "je t'aime" dans le monde
const loveWords = [
    "I love you", "Je t'aime", "Ti amo", "Te quiero",
    "Ich liebe dich", "Eu te amo", "Seni seviyorum",
    "Я тебя люблю", "我爱你", "أحبك", "Saranghae",
    "Nakupenda", "Mahal kita", "Kimi wo ai shiteru",
    "Volim te", "S'agapo", "Miluji tě", "Te iubesc"
];

// Points qui forment la forme d'un cœur (formule mathématique)
// On génère 100 points répartis sur le contour du cœur
const heartPoints = [];
for (let t = 0; t < Math.PI * 2; t += 0.07) {
    // Formule paramétrique du cœur
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
    heartPoints.push({ x, y });
}

// Index du prochain point disponible sur le cœur
let pointIndex = 0;

// On récupère les éléments HTML
const input = document.getElementById("user-input");
const container = document.getElementById("heart-container");
const finalMessage = document.getElementById("final-message");

// On écoute chaque fois que l'utilisateur appuie sur Espace ou Entrée
input.addEventListener("keydown", function(event) {
    if (event.key === " " || event.key === "Enter") {

        // On récupère ce qu'elle a tapé et on vide l'input
        const typed = input.value.trim();
        input.value = "";

        // Si elle n'a rien tapé on ignore
        if (typed === "") return;

        // Si tous les points du cœur sont utilisés, on arrête
        if (pointIndex >= heartPoints.length) return;

        // On choisit un "je t'aime" aléatoire dans le tableau
        const randomLove = loveWords[Math.floor(Math.random() * loveWords.length)];

        // On récupère le prochain point sur le cœur
        const point = heartPoints[pointIndex];
        pointIndex++;

        // On crée un <span> avec le mot
        const span = document.createElement("span");
        span.textContent = randomLove;

        // On le positionne sur le cœur
        // Le *10 et le +200/150 sont pour centrer et agrandir le cœur
        span.style.left = (point.x * 10 + 200) + "px";
        span.style.top  = (point.y * 10 + 150) + "px";

        // On l'ajoute dans le conteneur
        container.appendChild(span);

        // Quand le cœur est complet, on affiche le message final
        if (pointIndex >= heartPoints.length) {
            finalMessage.style.display = "block";
        }
    }
});