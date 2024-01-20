async function sortMedias(medias, key) {
  if (key?.toLowerCase() === "date") {
    const sortedMedias = medias.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    displayMedias(sortedMedias);
  } else if (key?.toLowerCase() === "titre") {
    const sortedMedias = medias.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    displayMedias(sortedMedias);
  } else {
    const sortedMedias = medias.sort((a, b) => {
      return b.likes - a.likes;
    });
    displayMedias(sortedMedias);
  }
}
