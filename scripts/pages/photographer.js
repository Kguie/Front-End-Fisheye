async function displayData(photographer) {
  const $photographersWrapper = document.querySelector(".photograph-header");

  const { price, getPageUserCardDOM } = photographerTemplate(photographer);
  const userCardDOM = getPageUserCardDOM();
  const $contactButton = userCardDOM.querySelector(".contact_button");
  const $name = userCardDOM.querySelector("h1");

  //Ajout de la fonction sur le bouton contact
  $contactButton.onclick = () => displayModal("contact", $name.textContent);
  $photographersWrapper.appendChild(userCardDOM);

  const photographerSalary = document.querySelector(
    ".salary-container__amount"
  );

  photographerSalary.textContent = price;
}

function displaySorter() {
  photoSorter();
  const $chosenSortOption = document.querySelector(".collapse__chosen");
  const $noChosen1SortOption = document.querySelector(
    ".collapse__other-choices-container__choice1"
  );
  const $noChosen2SortOption = document.querySelector(
    ".collapse__other-choices-container__choice2"
  );

  $noChosen1SortOption.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      $chosenSortOption.focus();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      $noChosen2SortOption.focus();
    } else if (event.key === "Escape") {
      // Déclenche l'événement au clic pour fermer le collapse
      $chosenSortOption.focus();
      $chosenSortOption.dispatchEvent(new Event("click"));
    }
  });
  $noChosen2SortOption.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      $noChosen1SortOption.focus();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      $chosenSortOption.focus();
    } else if (event.key === "Escape") {
      // Déclenche l'événement au clic pour fermer le collapse
      $chosenSortOption.focus();
      $chosenSortOption.dispatchEvent(new Event("click"));
    }
  });

  //Event listeners pour changer de tri
  $noChosen1SortOption.addEventListener("click", () => {
    photoSorter($noChosen1SortOption.querySelector("p").textContent);
    handleCollaspe();
  });
  $noChosen2SortOption.addEventListener("click", () => {
    photoSorter($noChosen2SortOption.querySelector("p").textContent);
    handleCollaspe();
  });
}

async function displayMedias(mediaList) {
  const $mediasWrapper = document.querySelector(".medias-section__medias");
  //Vide d'abord le contenu
  $mediasWrapper.innerHTML = ``;
  mediaList.forEach((media) => {
    const { mediaCard } = mediaCardTemplate(media, mediaList);
    $mediasWrapper.appendChild(interactiveMediaCard(mediaCard));
  });
}

function displayLikesTotal(nodeList) {
  const $totalWrapper = document.querySelector(".like-container__amount");
  let total = 0;

  nodeList.forEach((node) => {
    total += parseInt(node.textContent);
  });
  const formattedAmount = total.toLocaleString("fr-FR");
  $totalWrapper.textContent = formattedAmount;
}

async function init() {
  // Récupère les datas du photographe,
  const photographer = await getPhotographers();

  // Vérifie si un id est présent dans les paramètres
  const paramsId = new URLSearchParams(window.location.search).get("id")
    ? true
    : false;

  if (paramsId) {
    await displayData(photographer);
  } else {
    window.location.href = "index.html";
  }
  displaySorter();

  //Ajout de l'eventListener sur les croix des modal afin de les fermer
  const $contactCloseButton = document.querySelector(".modal__header img");
  $contactCloseButton.onclick = () => displayModal("contact");
  $contactCloseButton.onkeydown = (event) => {
    if (event.key === "Enter") {
      closeModal();
    }
  };
  const $lightboxCloseButton = document.querySelector(".lightbox__close ");
  $lightboxCloseButton.onclick = () => displayModal("lightbox");
  $lightboxCloseButton.onkeydown = (event) => {
    if (event.key === "Enter") {
      closeModal();
    }
  };
}

init();
