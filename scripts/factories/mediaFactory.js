function createMediaThumbnail(image, video, photographerId, title) {
  const img = image
    ? document.createElement("img")
    : document.createElement("video");
  img.alt = title;
  img.classList.add("media-card__media-container__image");
  function createImgThumbnail() {
    img.src = `assets/photographers/${photographerId}/${image}`;
    return img;
  }
  function createVideoThumbnail() {
    img.src = `assets/photographers/${photographerId}/${video}`;
    return img;
  }
  return image ? createImgThumbnail() : createVideoThumbnail();
}

function createMediaLightbox(image, video, photographerId, title) {
  function createImgLightbox() {
    const img = document.createElement("img");
    img.alt = title;
    img.classList.add("lightbox__media-container__image");
    img.src = `assets/photographers/${photographerId}/${image}`;
    return img;
  }
  function createVideoLightbox() {
    const mediaPlayer = document.createElement("video");
    mediaPlayer.classList.add("lightbox__media-container__video");
    mediaPlayer.src = `assets/photographers/${photographerId}/${video}`;
    return mediaPlayer;
  }
  return image ? createImgLightbox() : createVideoLightbox();
}
