function photographerTemplate(data) {
  const { name, portrait, id, city, country, tagline, price } = data;

  // Vérifie si un id est présent dans les paramètres
  const paramsId = new URLSearchParams(window.location.search).get("id")
    ? true
    : false;

  const picture = `assets/photographers/${
    portrait ? "id/" + portrait : "account.png"
  }`;

  function getUserCardDOM() {
    const userCard = document.createElement("article");
    userCard.setAttribute("aria-label", `Carte de présentation de ${name}`);
    userCard.setAttribute("tabindex", 0);

    userCard.innerHTML = `
      <div class="img_container">
        <img class="profile_img" style="${
          portrait ? "width:250px;height:250px" : "width:200px;height:200px"
        }" src="${picture}" alt="Profil de ${name}" />
      </div>
      <div class="text_container" style="text-align:center">
        <h2 class="name" style="font-size:36px;margin:20px 0 0 0" aria-label="Nom">${name}</h2>
        <p class="location" style="font-size:13px" aria-label="Localisation" >${city}, ${country}</p>
        <p class="quote" style="font-size:10px;margin-top:3px" aria-label="Slogan">${tagline}</p>
        <p class="price" style="font-size:9px;color: #757575;margin-top:3px" aria-label="Salaire horaire">${price}€/jour</p>
        <p class="invisible_helper_text">Cliquez pour accéder à la page complète de ce photographe</p>
      </div>`;

    return userCard;
  }

  function getPageUserCardDOM() {
    const userCard = document.createElement("article");
    userCard.classList.add("photograph-header__card");
    userCard.setAttribute("aria-label", `Bannière de ${name}`);

    userCard.innerHTML = `
      <div class="img_container">
        <img class="profile_img" style="${
          portrait ? "width:250px;height:250px" : "width:200px;height:200px"
        }" src="${picture}" alt="Profil de ${name}" />
      </div>
      <div class="contact_button_container">
        <button tabIndex="0" class="contact_button" aria-label="Contact me" onclick="displayModal()">
            Contactez-moi
        </button>
      </div>  
      <div class="text_container" style="max-width:40%">
        <h1 class="name" style="font-size:64px;margin:0" aria-label="Nom">${name}</h1>
        <p class="location" style="font-size:24px" aria-label="Localisation" >${city}, ${country}</p>
        <p class="quote" style="font-size:18px;margin-top:20px;color:#525252" aria-label="Slogan">${tagline}</p>
      </div>
      `;

    return userCard;
  }

  //Si un id est présent dans l'url, la version page de la carte est retournée
  return paramsId ? { price, getPageUserCardDOM } : { id, getUserCardDOM };
}
