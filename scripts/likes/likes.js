function likesTotalCounter() {
  const $likesNumberWrapperList = document.querySelectorAll(
    ".media-card__text-container__likes___amount"
  );
  displayLikesTotal($likesNumberWrapperList);
}

function handleLike(likeNode) {
  const likeAmountNode = likeNode.querySelector(
    ".media-card__text-container__likes___amount"
  );

  function addOrRemoveLike() {
    const isMediaLiked =
      likeNode.classList["1"] === "media-card__text-container__likes--liked"
        ? true
        : false;
    if (isMediaLiked) {
      likeAmountNode.textContent = parseInt(likeAmountNode.textContent) - 1;
      const $totalLikesWrapper = document.querySelector(
        ".like-container__icon"
      );
      likeNode.classList.remove("media-card__text-container__likes--liked");

      //Animation sur l'icone total des likes
      $totalLikesWrapper.animate(
        { transform: ["scale(1)", "scale(1.5)", "scale(1)"] },
        { duration: 500, iterations: 1, easing: "ease-out" }
      );
      likesTotalCounter();
    } else {
      likeAmountNode.textContent = parseInt(likeAmountNode.textContent) + 1;
      const $totalLikesWrapper = document.querySelector(
        ".like-container__icon"
      );
      likeNode.classList.add("media-card__text-container__likes--liked");
      //Animation sur l'icone total des likes
      $totalLikesWrapper.animate(
        { transform: ["scale(1)", "scale(1.5)", "scale(1)"] },
        { duration: 500, iterations: 1, easing: "ease-out" }
      );
      likesTotalCounter();
    }
  }
  likeNode.onkeydown = (event) => {
    if (event.key === "Enter") {
      addOrRemoveLike();
    }
  };

  likeNode.onclick = () => {
    addOrRemoveLike();
  };
}
