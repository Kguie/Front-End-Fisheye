function displayModal(modal, data, mediaId) {
  const name = data;
  const modalContainer = document.getElementById("modal-container");
  const contactModal = document.getElementById("contact_modal");
  const lightboxModal = document.getElementById("lightbox_modal");
  const $body = document.querySelector("body");

  function openContactModal() {
    if ((lightboxModal.style.display = "flex")) {
      lightboxModal.style.display = "none";
      lightboxModal.ariaHidden = true
    }
    contactModal.style.display = "block";
    contactModal.ariaHidden = false
    contactModal.ariaRoleDescription = `Contactez ${name}`;
    contactModal.scrollIntoView({ behavior: "smooth" });
    modalContainer.style.display = "flex";
    const photographerNameNode = contactModal.querySelector("h3");
    photographerNameNode.textContent = name;
    $body.ariaHidden = true;
    modalContainer.ariaHidden = false;
    $body.onkeydown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
      if (event.key === "Tab") {
        event.preventDefault();
        //Mise en place de la navigation par tab dans le formulaire
        const $firstNameInput = document.getElementById("first");
        const $lastNameInput = document.getElementById("last");
        const $emailInput = document.getElementById("email");
        const $messageInput = document.getElementById("message");
        const $submitButton = contactModal.querySelector(".contact_button");
        const $closeButton = document.querySelector(".modal__header img");
        const tabArray = [
          $firstNameInput,
          $lastNameInput,
          $emailInput,
          $messageInput,
          $submitButton,
          $closeButton,
        ];
        const focusedElement = document.activeElement;
        if (!tabArray.includes(focusedElement)) {
          tabArray[0].focus();
        } else {
          if (focusedElement === tabArray[0]) {
            tabArray[1].focus();
          } else if (focusedElement === tabArray[1]) {
            tabArray[2].focus();
          } else if (focusedElement === tabArray[2]) {
            tabArray[3].focus();
          } else if (focusedElement === tabArray[3]) {
            tabArray[4].focus();
          } else if (focusedElement === tabArray[4]) {
            tabArray[5].focus();
          } else if (focusedElement === tabArray[5]) {
            tabArray[0].focus();
          }
        }
      }
    };
  }
  function openLightboxModal() {
    if ((contactModal.style.display = "block")) {
      contactModal.style.display = "none";
      contactModal.ariaHidden = true;
    }
    $body.ariaHidden = true;
    modalContainer.ariaHidden = false;
    lightboxModal.ariaHidden = false;
    modalContainer.style.display = "flex";
    lightboxModal.style.display = "flex";
    handleLightbox(mediaId, data);
    lightboxModal.scrollIntoView({ behavior: "smooth" });
  }

  if (modal === "contact") {
    if (
      modalContainer.style.display === "none" ||
      modalContainer.style.display === ""
    ) {
      openContactModal();
    } else {
      closeModal();
    }
  } else if (modal === "lightbox") {
    if (
      modalContainer.style.display === "none" ||
      modalContainer.style.display === ""
    ) {
      openLightboxModal();
    } else {
      closeModal();
    }
  }
}

function closeModal() {
  const modalContainer = document.getElementById("modal-container");
  const contactModal = document.getElementById("contact_modal");
  const lightboxModal = document.getElementById("lightbox_modal");
  const $body = document.querySelector("body");
  modalContainer.style.display = "none";
  modalContainer.ariaHidden = true;
  if (contactModal.style.display !== "none") {
    contactModal.style.display = "none";
    contactModal.ariaHidden = true
  }
  if (lightboxModal.style.display !== "none") {
    lightboxModal.style.display = "none";
    lightboxModal.ariaHidden = true
  }
  $body.onkeydown = null;
  $body.ariaHidden = false;
}
