function photoSorter(sortKey) {
  let totalKeys = ["Popularité", "Date", "Titre"];

  const chosen = document.querySelector(".collapse__chosen");
  const noChosen1 = document.querySelector(
    ".collapse__other-choices-container__choice1"
  );
  const noChosen2 = document.querySelector(
    ".collapse__other-choices-container__choice2"
  );

  //Ajout des eventListener pour la gestion de l'ouverture du collapse
  chosen.addEventListener("click", handleCollaspe);

  /**
   * Constitue l'afficahe de la partie de tri au changement de méthode
   */
  function handleChange() {
    const noChosenArray = totalKeys.filter((key) => key !== sortKey);

    //Affiche texte du collapse
    chosen.querySelector("p").textContent = sortKey;
    chosen.setAttribute("aria-label", `Tri par ${sortKey}`);
    noChosen1.querySelector("p").textContent = noChosenArray[0];
    noChosen1.setAttribute("aria-label", `Tri par ${noChosenArray[0]}`);
    noChosen2.querySelector("p").textContent = noChosenArray[1];
    noChosen2.setAttribute("aria-label", `Tri par ${noChosenArray[1]}`);

    return;
  }

  /**
   * Constitue l'afficahe de la partie de tri au démarrage de pa page
   */
  function initSort() {
    const chosenKey = totalKeys[0];
    const noChosenArray = totalKeys.filter((key) => key !== chosenKey);

    //Affiche texte du collapse
    chosen.querySelector("p").textContent = chosenKey;
    chosen.setAttribute("aria-label", `Tri par ${chosenKey}`);
    noChosen1.querySelector("p").textContent = noChosenArray[0];
    noChosen1.setAttribute("aria-label", `Tri par ${noChosenArray[0]}`);
    noChosen2.querySelector("p").textContent = noChosenArray[1];
    noChosen2.setAttribute("aria-label", `Tri par ${noChosenArray[1]}`);
  }
  return !sortKey ? initSort() : handleChange();
}

/**
 * Gère l'ouverture et la fermeture du collapse
 */
function handleCollaspe() {
  const isOpen = document.querySelector(
    ".collapse__other-choices-container--open"
  )
    ? true
    : false;

  const collapseContainer = document.querySelector(
    ".collapse__other-choices-container"
  );
  const collapseScreen = document.querySelector(".collapse__chosen");
  const icon = document.querySelector(".collapse__chosen__icon");

  if (isOpen) {
    collapseContainer.classList.remove(
      "collapse__other-choices-container--open"
    );
    collapseContainer.style.maxHeight = 0;

    icon.style.transform = "rotate(0deg)";
    //Permet le retour des bords arrondis du bouton à la fin de l'animation
    setTimeout(
      () => collapseScreen.classList.remove("collapse__chosen--open"),
      250
    );
    return;
  }
  collapseContainer.classList.add("collapse__other-choices-container--open");
  collapseScreen.classList.add("collapse__chosen--open");
  icon.style.transform = "rotate(180deg)";
  collapseContainer.style.maxHeight = "100px";
}
