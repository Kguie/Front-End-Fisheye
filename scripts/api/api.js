//Renvoie toutes les données de tous les photographes ou d'un seul si un id est présent dans l'url
async function getPhotographers() {
  try {
    const response = await fetch("../../data/photographers.json");
    const { photographers } = await response.json();
    // Vérifie si un id est présent dans les paramètres et le récupère
    const paramsId = new URLSearchParams(window.location.search).get("id");

    if (paramsId && Array.isArray(photographers)) {
      const photographer = photographers.find(
        (photographer) => photographer["id"] === parseInt(paramsId)
      );
      if (photographer) {
        return photographer;
      } else {
        console.error("Aucun photographe répondant à cet id n'a été trouvé");
        window.location.href = "index.html";
        return;
      }
    }
    return photographers || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
