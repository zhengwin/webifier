const modalClose = (textObj) => {
    let modal = document.querySelector("#exampleModal");
    let saveBtn = modal.querySelector("#edit-modal-save");
    let textArea = modal.querySelector("textarea");

    textObj.innerText = textArea.value;
    modal.classList.remove("show");
    modal.style.display = "none";
}

const modalEditText = (textObj) => {
    let modal = document.querySelector("#exampleModal");
    modal.classList.add("show");
    modal.style.display = "block";
    let textArea = modal.querySelector("textarea");
    textArea.innerText = textObj.innerText;

    let modalClose = modal.querySelectorAll("button");

    modalClose.forEach( function(closeBtn) {
        closeBtn.addEventListener("click", () => {
            if (closeBtn.id == "edit-modal-save") {
                textObj.innerText = textArea.value;
            }
            modal.classList.remove("show");
            modal.style.display = "none";
        });

    });
}

export { modalClose, modalEditText };