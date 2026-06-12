// On récupère tous les éléments avec la classe "reveal"
const reveals = document.querySelectorAll(".reveal");

// Intersection Observer — détecte quand un élément entre dans l'écran
const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        // Si l'élément est visible à l'écran
        if (entry.isIntersecting) {

            // On ajoute la classe "visible" qui déclenche l'animation CSS
            entry.target.classList.add("visible");

            // On arrête d'observer cet élément — il est déjà apparu
            observer.unobserve(entry.target);
        }
    });

}, {
    // L'élément doit être visible à 15% avant de déclencher
    threshold: 0.15
});

// On observe chaque élément "reveal"
reveals.forEach(function(el) {
    observer.observe(el);
});