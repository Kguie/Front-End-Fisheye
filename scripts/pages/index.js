async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    const userId = photographerModel.id;
    //Carte DOM avec redirection vers la page du photographe
    const linkCard = cardWithLink(userCardDOM, userId);
    photographersSection.appendChild(linkCard);
  });
}

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
