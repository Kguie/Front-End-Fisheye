function photographerTemplate(data) {
  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `assets/photographers/${
    portrait ? "id/" + portrait : "/favicon.png"
  }`;

  function getUserCardDOM() {
    const userCard = document.createElement("article");
    userCard.setAttribute("aria-label", `Carte de présentation de ${name}`);
    userCard.setAttribute("tabindex", 0);

    userCard.innerHTML = `
      <div class="img_container">
        <img src="${picture}" alt="Profil de ${name}" />
      </div>
      <div class="text_container">
        <h2 aria-label="Nom">${name}</h2>
        <p class="location" aria-label="Localisation" >${city}, ${country}</p>
        <p class="quote" aria-label="Slogan">${tagline}</p>
        <p class="price" aria-label="Salaire horaire">${price}€/jour</p>
      </div>`;

    return userCard;
  }
  return { name, picture, id, getUserCardDOM };
}
