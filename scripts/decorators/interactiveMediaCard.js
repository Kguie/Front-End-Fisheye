//Add like event listener and image leventListener to media card
function interactiveMediaCard(mediaCard) {
  const $likeIconWrapper = mediaCard.querySelector(
    ".media-card__text-container__likes"
  );
  const $mediaWrapper = mediaCard.querySelector(".media-card__image-container");

  handeLike($likeIconWrapper);

  $mediaWrapper.addEventListener("click", () => {});

  return mediaCard;
}
