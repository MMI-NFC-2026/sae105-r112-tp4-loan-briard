// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");


function fermer(det) {
  if (!det.open || det.classList.contains("ferme")) return;

  const texte = det.querySelector(":scope > div");
  det.classList.add("ferme");

  texte.addEventListener(
    "animationend",
    () => {
      det.open = false;
      det.classList.remove("ferme");
    },
    { once: true }
  );
}

accordeon?.addEventListener("click", (event) => {
  const summary = event.target.closest("summary");
  if (!summary) return;

  const detailsClique = summary.parentElement;
 
  if (detailsClique.open) {
    event.preventDefault();
    fermer(detailsClique);
    return;
  }

  accordeon.querySelectorAll("details").forEach((det) => {
    if (det !== detailsClique) fermer(det);
  });
});