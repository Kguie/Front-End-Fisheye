function createMediaThumbnail(image, video, photographerId, title, mediaId) {
  const img = image
    ? document.createElement("img")
    : document.createElement("video");
  img.alt = title;
  img.classList.add("media-card__media-container__image");
  function createImgThumbnail() {
    img.src = `assets/photographers/${photographerId}/${image}`;
    return { img, mediaId };
  }
  function createVideoThumbnail() {
    img.innerHTML = `
    <source src="assets/photographers/${photographerId}/${video}" type="video/mp4">
    <p aria-hidden=true>Your browser does not support the video tag.<p>
    `;
    return { img, mediaId };
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
    mediaPlayer.setAttribute("controls", true);
    mediaPlayer.alt = title;
    mediaPlayer.innerHTML = `
    <source src="assets/photographers/${photographerId}/${video}" type="video/mp4">
    <p aria-hidden=true>Your browser does not support the video tag.<p>
    `;
    return mediaPlayer;
  }
  return image ? createImgLightbox() : createVideoLightbox();
}
