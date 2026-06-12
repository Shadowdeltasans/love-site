const introEl = document.getElementById("intro-text");
const btn = document.getElementById("main-btn");

// Le texte qui s'écrit avant le bouton
const text = "This was made for you.";
let i = 0;

function typeIntro() {
    if (i < text.length) {
        introEl.textContent += text[i];
        i++;
        setTimeout(typeIntro, 80);
    } else {
        // Texte fini — on affiche le bouton avec un fondu
        setTimeout(function() {
            btn.style.display = "inline-block";
            btn.classList.add("fade-in");
        }, 600);
    }
}

typeIntro();
