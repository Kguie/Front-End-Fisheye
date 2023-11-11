function cardWithLink(card, id) {
  const navigateToPhotoprapherPage = () => {
    window.location.href = "./photographer.html?id=" + id;
  };

  card.addEventListener("click", navigateToPhotoprapherPage);
  //En tapant sur les touches espace ou entrer, l'évènement se déclenche
  card.addEventListener("keydown", (event) => {
    (event.keyCode === 32 || event.keyCode === 13) &&
      navigateToPhotoprapherPage();
  });
  return card;
}
