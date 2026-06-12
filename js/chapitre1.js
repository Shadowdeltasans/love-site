// Tableau de tes phrases
const phrases = [
"I love you like I've never loved anyone before.",
"I love you so much that every second is painful because I'm far from you.",
"I love you so much that where I used to have nightmares, you've transformed them into peace.",
"I love you so much that now no dream could ever be as good or as beautiful as the life we could build together.",
"I love you so much that tomorrow no longer scares me."
];

// On démarre à la phrase 0 et à la lettre 0
let phraseIndex = 0;
let letterIndex = 0;

// On récupère les éléments HTML dont on a besoin
const textElement = document.getElementById("typewriter-text");
const nextBtn = document.getElementById("next-btn");

function typeWriter() {

    // Est-ce qu'il reste des phrases à écrire ?
    if (phraseIndex < phrases.length) {

        // Est-ce qu'il reste des lettres dans la phrase actuelle ?
        if (letterIndex < phrases[phraseIndex].length) {

            // On ajoute la lettre suivante au texte affiché
            textElement.innerHTML += phrases[phraseIndex][letterIndex];

            // On avance d'une lettre
            letterIndex++;

            // On rappelle la fonction après 100ms (vitesse de frappe)
            setTimeout(typeWriter, 50);

        } else {
            // La phrase est finie — on passe à la suivante
            letterIndex = 0;
            phraseIndex++;

            // On ajoute un saut de ligne entre les phrases
            textElement.innerHTML += "<br>";

            // Pause plus longue avant la prochaine phrase
            setTimeout(typeWriter, 800);
        }

    } else {
        // Toutes les phrases sont écrites — on affiche le bouton
        nextBtn.style.display = "block";
    }
}

// On démarre l'animation
typeWriter();