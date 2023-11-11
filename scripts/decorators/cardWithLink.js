function cardWithLink(card, id) {
  const navigateToPhotoprapherPage = () => {
    window.location.href = "./photographer.html?id=" + id;
  };

  card.addEventListener("click", navigateToPhotoprapherPage);
  card.addEventListener("keyDown", (event) => {
    (event.key === "enter" || event.key === "space") &&
      navigateToPhotoprapherPage();
  });
  return card;
}
