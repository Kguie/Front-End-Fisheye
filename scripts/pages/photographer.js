async function displayData(photographer) {
  const $photographersWrapper = document.querySelector(".photograph-header");

  const { price, getPageUserCardDOM } = photographerTemplate(photographer);
  const userCardDOM = getPageUserCardDOM();
  $photographersWrapper.appendChild(userCardDOM);

  const photographerSalary = document.querySelector(
    ".salary-container__amount"
  );

  photographerSalary.textContent = price;
}

function displaySorter() {
  photoSorter();
  const noChosen1 = document.querySelector(
    ".collapse__other-choices-container__choice1"
  );
  const noChosen2 = document.querySelector(
    ".collapse__other-choices-container__choice2"
  );
  noChosen1.addEventListener("click", () => {
    photoSorter(noChosen1.querySelector("p").textContent);
    handleCollaspe();
  });
  noChosen2.addEventListener("click", () => {
    photoSorter(noChosen2.querySelector("p").textContent);
    handleCollaspe();
  });
}

async function displayMedias(medias) {
  const $mediasWrapper = document.querySelector(".medias-section__medias");
  //Vide d'abord le contenu
  $mediasWrapper.innerHTML = ``;
  medias.forEach((media) => {
    $mediasWrapper.appendChild(interactiveMediaCard(mediaCardTemplate(media)));
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
}

init();
