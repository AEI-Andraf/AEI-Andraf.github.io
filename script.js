// Ouvrir la modale et afficher le projet
document.querySelectorAll('.logo-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const projectId = this.getAttribute('href').substring(1);
        const projectContent = document.getElementById(projectId);

        const projectDetails = document.getElementById('project-details');
        projectDetails.innerHTML = projectContent.innerHTML;

        // === ZOOM GLOBAL 50% POUR TOUS LES PDF ===
        projectDetails.querySelectorAll("iframe.pdf-frame").forEach(frame => {
            const src = frame.getAttribute("src");
            if (!src.includes("#")) {
                frame.setAttribute("src", src + "#zoom=50");
            } else if (!src.includes("zoom=")) {
                frame.setAttribute("src", src + "&zoom=50");
            }
        });

        document.getElementById('project-modal').style.display = 'block';

        document.getElementById('project-modal').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fermer la modale lorsqu'on clique sur le bouton "fermer"
document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('project-modal').style.display = 'none';
});

// Fermer la modale lorsqu'on clique en dehors de la boîte modale
window.onclick = function (event) {
    if (event.target === document.getElementById('project-modal')) {
        document.getElementById('project-modal').style.display = 'none';
    }
};
