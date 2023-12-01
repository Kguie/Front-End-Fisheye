function handleLightbox(mediaId, sortedMediasList) {
  const $body = document.querySelector("body");
  const currentMedia = sortedMediasList.find((media) => media.id === mediaId);
  const currentMediaIndex = sortedMediasList.indexOf(currentMedia);
  const { title, image, video, photographerId } = currentMedia;
  const $mediaWrapper = document.querySelector(
    ".lightbox__content__media-container"
  );
  //Suppression de l'image déjà présente
  $mediaWrapper.innerHTML = "";
  const $title = document.querySelector(".lightbox__content__title");
  const $previousButton = document.querySelector(".lightbox__previous img");
  const $nextButton = document.querySelector(".lightbox__next img");
  const $closeButton = document.querySelector(".lightbox__close img");
  const $media = createMediaLightbox(image, video, photographerId, title);
  $mediaWrapper.appendChild($media);
  $title.textContent = title;

  const previousMediaId =
    currentMediaIndex === 0
      ? sortedMediasList[sortedMediasList.length - 1].id
      : sortedMediasList[currentMediaIndex - 1].id;

  const nextMediaId =
    currentMediaIndex === sortedMediasList.length - 1
      ? sortedMediasList[0].id
      : sortedMediasList[currentMediaIndex + 1].id;

  //Ajout des fonction au clic et appui sur les flèches sur les boutons next et previous
  $previousButton.onclick = () =>
    handleLightbox(previousMediaId, sortedMediasList);
  $previousButton.onkeydown = (event) => {
    if (event.key === "Enter") {
      handleLightbox(previousMediaId, sortedMediasList);
    }
  };

  $nextButton.onclick = () => handleLightbox(nextMediaId, sortedMediasList);
  $nextButton.onkeydown = (event) => {
    if (event.key === "Enter") {
      handleLightbox(nextMediaId, sortedMediasList);
    }
  };

  $body.onkeydown = (event) => {
    if (event.key === "ArrowLeft") {
      handleLightbox(previousMediaId, sortedMediasList);
    } else if (event.key === "ArrowRight") {
      handleLightbox(nextMediaId, sortedMediasList);
    } else if (event.key === "Escape") {
      closeModal();
    } else if (event.key === "Tab") {
      event.preventDefault();
      //Sélection des icones avec tab
      const icons = [$previousButton, $nextButton, $closeButton];
      const focusedElement = document.activeElement;
      if (!icons.includes(focusedElement)) {
        icons[0].focus();
      } else if (focusedElement === icons[0]) {
        icons[1].focus();
      } else if (focusedElement === icons[1]) {
        icons[2].focus();
      } else if (focusedElement === icons[2]) {
        icons[0].focus();
      }
    }
  };
}
