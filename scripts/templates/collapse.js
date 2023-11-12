function collapseTemplate(chosenState, totalStates) {
  let otherStates = totalStates.filter(
    (state) => state !== (chosenState ? chosenState : totalStates[0])
  );

  let collapse = `
  <button  class="collapse__chosen""><p>${
    chosenState ? chosenState : totalStates[0]
  }</p><image /></button>
  <div class="collapse__others">
    <button  type="button"><p>${otherStates[0]}</p></button>
    <button type="button"><p>${otherStates[1]}</p></button>
  </div>
  `;
  function openCollapse() {
    collapse = `
  <button  class="collapse__chosen" type="button"><p>${
    chosenState ? chosenState : totalStates[0]
  }</p><image /></button>
  <div class="collapse__others--show">
    <button   type="button"><p>${otherStates[0]}</p></button>
    <button type="button"><p>${otherStates[1]}</p></button>
  </div>
  `;
    return collapse;
  }

  return { collapse, openCollapse };
}
