function mediaCardTemplate(data) {
  const { date, id, likes, price, title, video, image } = data;
  const mediaCard = document.createElement("article");
  mediaCard.classList.add("media-card");
  // const media=image?`<img src="../assets/photographers/${name}/"/>`

  mediaCard.innerHTML = `
  <div tabindex="0" class="media-card__image-container" >
  </div>
  <div class="media-card__text-container" >
    <p class="media-card__text-container__title">${title}</p>
    <p class="media-card__text-container__likes">
      <span class="media-card__text-container__likes___amount">${likes}</span>
      <span class="media-card__text-container__likes___button"><img src="assets/icons/like-red.svg" alt="Cliquez pour ajouter un like"/></span>
    </p>
  </div>
  `;
  return mediaCard;
}
