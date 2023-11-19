//Add like event listener and image leventListener to media card
function interactiveMediaCard(mediaCard) {
  const $likeIconWrapper = mediaCard.querySelector(
    ".media-card__text-container__likes"
  );
  const $mediaWrapper = mediaCard.querySelector(".media-card__image-container");

  $likeIconWrapper.addEventListener("click", () => {
    const $totalLikesWrapper = document.querySelector(".like-container__icon");

    //Animation sur l'icone total des likes
    $totalLikesWrapper.animate(
      { transform: ["scale(1)", "scale(1.5)", "scale(1)"] },
      { duration: 500, iterations: 1, easing: "ease-out" }
    ).onfinish = (e) => {
      e.target.effect.target.style.transform = "scale(1)";
    };
  });

  $mediaWrapper.addEventListener("click", () => {});

  return mediaCard;
}
