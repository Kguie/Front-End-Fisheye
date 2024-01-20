async function photoSorter(sortKey) {
  const medias = await getMedias();

  let totalKeys = ["Popularité", "Date", "Titre"];

  const $chosenSortOption = document.querySelector(".collapse__chosen");
  const $noChosen1SortOption = document.querySelector(
    ".collapse__other-choices-container__choice1"
  );
  const $noChosen2SortOption = document.querySelector(
    ".collapse__other-choices-container__choice2"
  );

  //Ajout des eventListener pour la gestion de l'ouverture du collapse
  $chosenSortOption.addEventListener("click", handleCollapse);

  /**
   * Constitue l'affichage de la partie de tri au changement de méthode
   */
  function handleChange() {
    const noChosenArray = totalKeys.filter((key) => key !== sortKey);
    sortMedias(medias, sortKey);
    //Affiche texte du collapse
    $chosenSortOption.querySelector("p").textContent = sortKey;
    $chosenSortOption.setAttribute("aria-label", `Tri par ${sortKey}`);
    $noChosen1SortOption.querySelector("p").textContent = noChosenArray[0];
    $noChosen1SortOption.setAttribute(
      "aria-label",
      `Tri par ${noChosenArray[0]}`
    );
    $noChosen2SortOption.querySelector("p").textContent = noChosenArray[1];
    $noChosen2SortOption.setAttribute(
      "aria-label",
      `Tri par ${noChosenArray[1]}`
    );

    //Relance le compte de likes car pas de sauvegarde
    likesTotalCounter();

    return;
  }

  /**
   * Constitue l'affichage de la partie de tri au démarrage de la page
   */
  function initSort() {
    const chosenKey = totalKeys[0];
    const noChosenArray = totalKeys.filter((key) => key !== chosenKey);

    //Affiche les cartes
    sortMedias(medias, "popularité");

    //Affiche texte du collapse
    $chosenSortOption.querySelector("p").textContent = chosenKey;
    $chosenSortOption.setAttribute("aria-label", `Tri par ${chosenKey}`);
    $noChosen1SortOption.querySelector("p").textContent = noChosenArray[0];
    $noChosen1SortOption.setAttribute(
      "aria-label",
      `Tri par ${noChosenArray[0]}`
    );
    $noChosen2SortOption.querySelector("p").textContent = noChosenArray[1];
    $noChosen2SortOption.setAttribute(
      "aria-label",
      `Tri par ${noChosenArray[1]}`
    );
    //Initialise le compte de likes
    likesTotalCounter();

    return;
  }
  return !sortKey ? initSort() : handleChange();
}

/**
 * Gère l'ouverture et la fermeture du collapse avec animation
 */
function handleCollapse() {
  const $chosenSortOption = document.querySelector(".collapse__chosen");
  const $noChosen1SortOption = document.querySelector(
    ".collapse__other-choices-container__choice1"
  );
  const $noChosen2SortOption = document.querySelector(
    ".collapse__other-choices-container__choice2"
  );
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

  /**
   *Gère la navigation au clavier entre les boutons du collapse
   */
  function handleCollapseButtonsNavigation(event) {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      $noChosen2SortOption.focus();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      $noChosen1SortOption.focus();
    } else if (event.key === "Escape") {
      // Déclenche l'événement au clic pour fermer le collapse
      $chosenSortOption.focus();
      $chosenSortOption.dispatchEvent(new Event("click"));
    }
  }

  if (!isOpen) {
    //Les boutons sont sélectionnables par tab
    $chosenSortOption.ariaExpanded = true;
    $noChosen1SortOption.setAttribute("tabIndex", 0);
    $noChosen2SortOption.setAttribute("tabIndex", 0);
    $noChosen1SortOption.setAttribute("aria-hidden", false);
    $noChosen2SortOption.setAttribute("aria-hidden", false);

    //Le collapse devient visible avec une translation vers le bas

    collapseContainer.style.opacity = 1;
    collapseContainer.classList.add("collapse__other-choices-container--open");
    collapseScreen.classList.add("collapse__chosen--open");
    icon.style.transform = "rotate(180deg)";
    $chosenSortOption.setAttribute(
      "aria-label",
      "Ne pas changer l'ordre de tri"
    );
    //Ajout de la fonction à la pression de la touche
    $chosenSortOption.onkeydown = handleCollapseButtonsNavigation;
  } else {
    $chosenSortOption.ariaExpanded = false;
    collapseContainer.classList.remove(
      "collapse__other-choices-container--open"
    );
    //les boutons ne sont plus sélectionnables par tab
    $noChosen1SortOption.setAttribute("tabIndex", -1);
    $noChosen2SortOption.setAttribute("tabIndex", -1);
    $noChosen1SortOption.setAttribute("aria-hidden", true);
    $noChosen2SortOption.setAttribute("aria-hidden", true);
    icon.style.transform = "rotate(0deg)";
    //Permet le retour des bords arrondis du bouton à la fin de l'animation et la disparition des autres boutons
    setTimeout(() => {
      collapseContainer.style.opacity = 0;
      collapseScreen.classList.remove("collapse__chosen--open");
    }, 100);
    $chosenSortOption.setAttribute(
      "aria-label",
      "Cliquez pour choisir un ordre de tri"
    );
    //Suppression de la fonction à la pression de la touche
    $chosenSortOption.onkeydown = null;
  }
}
