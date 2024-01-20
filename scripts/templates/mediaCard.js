function mediaCardTemplate(data, mediaList) {
  const { id, likes, title, video, image, photographerId } = data;
  const mediaCard = document.createElement("article");
  mediaCard.classList.add("media-card");
  // const media=image?`<img src="../assets/photographers/${name}/"/>`

  const mediaContainer = document.createElement("div");
  mediaContainer.setAttribute("tabindex", "0");
  mediaContainer.classList.add("media-card__media-container");
  const mediaContent = createMediaThumbnail(
    image,
    video,
    photographerId,
    title,
    id
  );
  //Ajout de l'eventListener
  mediaContainer.onclick = () =>
    displayModal("lightbox", mediaList, mediaContent.mediaId);
  mediaContainer.onkeydown = (event) => {
    if (event.key === "Enter") {
      displayModal("lightbox", mediaList, mediaContent.mediaId);
    }
  };

  mediaContainer.appendChild(mediaContent.img);

  const textContainer = document.createElement("div");
  textContainer.classList.add("media-card__text-container");
  textContainer.innerHTML = `
  <p class="media-card__text-container__title">${title}</p>
  <p class="media-card__text-container__likes" tabindex="0">
    <span class="media-card__text-container__likes___amount">${likes}</span>
    <span class="media-card__text-container__likes___button"><img role="button" src="assets/icons/like-red.svg" alt="Cliquez pour ajouter un like"/></span>
  </p>`;

  mediaCard.appendChild(mediaContainer);
  mediaCard.appendChild(textContainer);

  return { mediaCard, id, mediaList };
}
