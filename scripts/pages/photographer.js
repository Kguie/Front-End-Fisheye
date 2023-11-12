async function displayData(photographer) {
  const photographersSection = document.querySelector(".photograph-header");
  const photographerModel = photographerTemplate(photographer);
  const userCardDOM = photographerModel.getPageUserCardDOM();
  photographersSection.appendChild(userCardDOM);
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
}

init();
