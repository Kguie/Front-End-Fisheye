async function getPhotographers() {
  try {
    const response = await fetch("../../data/photographers.json");
    const photographers = await response.json();
    return photographers || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
