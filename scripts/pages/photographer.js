async function displayData(photographer) {
  const photographersSection = document.querySelector(".photograph-header");
  const photographerModel = photographerTemplate(photographer);
  const userCardDOM = photographerModel.getPageUserCardDOM();
  photographersSection.appendChild(userCardDOM);
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

async function displayMedias(sortKey) {
  const medias = await getMedias();
}

async function init() {
  // Récupère les datas du photographe,
  const photographer = await getPhotographers();

  // Vérifie si un id est présent dans les paramètres
  const paramsId = new URLSearchParams(window.location.search).get("id")
    ? true
    : false;

  if (paramsId) {
    displayData(photographer);
  } else {
    window.location.href = "index.html";
  }
  displaySorter();
}

init();
