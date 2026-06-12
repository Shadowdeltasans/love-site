// Les compliments — remplace les placeholders par tes vrais mots
const compliments = [
    "Every message from you gives me butterflies in my stomach",
    "The sound of your voice gives me chills every moment",
    "I think you're being way too mean to yourself. Accept the fact that you're cute. ಠ╭╮ಠ",
    "Your kindness is like your soul unique and beautiful.",
    "You make everything better just by being there.",
    "Every moment by your side makes time fly; the nights spent talking to you are my favorite moments..",
    "You are more beautiful than you'll ever know.",
    "I want to dedicate my whole life to you, just to make you happy..",
    "You have a heart unlike anyone else.",
    "Every moment with you is a gift."
];

// On récupère la grille
const grid = document.getElementById("cards-grid");
const finalMessage = document.getElementById("final-message");

// Compteur de cartes retournées
let flippedCount = 0;

// On crée une carte pour chaque compliment
compliments.forEach(function(text) {

    // On crée la structure HTML de la carte
    // card > card-inner > card-front + card-back
    const card = document.createElement("div");
    card.classList.add("card");

    const inner = document.createElement("div");
    inner.classList.add("card-inner");

    // Face avant — le point d'interrogation
    const front = document.createElement("div");
    front.classList.add("card-front");
    front.textContent = "?";

    // Face arrière — le compliment
    const back = document.createElement("div");
    back.classList.add("card-back");
    back.textContent = text;

    // On assemble la carte
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    // Au clic — on retourne la carte
    card.addEventListener("click", function() {

        // Si déjà retournée on ignore
        if (card.classList.contains("flipped")) return;

        // On ajoute la classe "flipped" qui déclenche l'animation CSS
        card.classList.add("flipped");
        flippedCount++;

        // Si toutes les cartes sont retournées, on affiche le bouton
        if (flippedCount === compliments.length) {
            finalMessage.style.display = "block";
            launchConfetti();
        }
    });

    // On ajoute la carte dans la grille
    grid.appendChild(card);
});
// Lance les confettis quand toutes les cartes sont retournées
function launchConfetti() {
    const colors = ["#cc2022","#ff69b4","#ffd700","#ffffff","#ff4444","#ff8e8e"];
    for (let i = 0; i < 80; i++) {
        setTimeout(function() {
            const el = document.createElement("div");
            el.classList.add("confetti");
            el.style.left = Math.random() * 100 + "vw";
            el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            el.style.animationDuration = (Math.random() * 2 + 1.5) + "s";
            el.style.width = (Math.random() * 8 + 5) + "px";
            el.style.height = (Math.random() * 8 + 5) + "px";
            document.body.appendChild(el);
            // Supprimer après l'animation
            setTimeout(function() { el.remove(); }, 3500);
        }, i * 40);
    }
}
