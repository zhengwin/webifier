import { Element } from './Element.js';

class MediaObject extends Element {
    constructor() {
        let mediaObject = document.createElement("div");
        mediaObject.className = "media";
        mediaObject.id = "media-test";
        mediaObject.innerHTML =
        `
        <input type="file"  accept="image/*" name="image" id="media-img" style="display: none;">
        <label class="media-object-img" for="media-img" style="cursor: pointer;"> Click Me To Change Image</label>
        <div class="media-body">
            <h5 class="mt-0">Media Heading</h5>
            <p class="element-text">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </div>
        `;

        super(mediaObject);
        this.mediaObject = mediaObject;
        this.closeModalHandler = this.closeModal.bind(this);
        this.editTextHandler = this.editText.bind(this);
        this.text = this.mediaObject.querySelector("p");

        let input = this.mediaObject.querySelector("input");
        let label = this.mediaObject.querySelector("label");

        this.text.addEventListener("dblclick", () => {
            this.editText(this.closeModalHandler);
        });
        input.addEventListener("change", function(){
            let file = URL.createObjectURL(event.target.files[0]);
            let path = file.slice(5, file.length)
            label.style.backgroundImage =  `url(${file})`;
        });
    }

    closeModal(e) {
        let modal = document.querySelector("#exampleModal");
        let textArea = modal.querySelector("textarea");

        if (e.target.id == "edit-modal-save") {
            this.text.innerText = textArea.value;
        }
        
        modal.classList.remove("show");
        modal.style.display = "none";
        e.target.removeEventListener("click", this.closeModalHandler);
    }

    editText(closeModalHandler) {
        let modal = document.querySelector("#exampleModal");
        modal.classList.add("show");
        modal.style.display = "block";
        let textArea = modal.querySelector("textarea");
        textArea.innerText = this.text.innerText;
        
        let modalCloseBtn = modal.querySelectorAll("button");

        modalCloseBtn.forEach( function(closeBtn) {
            // console.log(this.text);
            closeBtn.addEventListener("click", closeModalHandler);
        });
    }    
}

export { MediaObject };