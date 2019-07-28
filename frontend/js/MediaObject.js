import { Element } from './Element.js';
import { modalClose, modalEditText } from './Modal.js'

class MediaObject extends Element {
    constructor() {
        let mediaObject = document.createElement("div");
        mediaObject.className = "media";
        mediaObject.id = "media-test";
        // <img class="mr-3 media-object-img" src="/frontend/img/cat.jpg" alt="Generic placeholder image">
        // <input type="file"  accept="image/*" name="image" id="media-img" style="display: none;">
        let input = document.createElement("input");
        input.setAttribute("name", "image");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.setAttribute("id", "media-img");
        input.setAttribute("style", "display: none;");

        let label = document.createElement("label");
        label.setAttribute("class", "media-object-img");
        label.setAttribute("for", "media-img");
        label.setAttribute("style", "cursor: pointer; ");
        label.innerText = "Click Me To Change Image";

        let content = document.createElement("div");
        content.className = "media-body";
        content.innerHTML = `
        <h5 class="mt-0">Media heading</h5>
        <p class="element-text">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. </p>
        `;

        mediaObject.appendChild(input);
        mediaObject.appendChild(label);
        mediaObject.appendChild(content);

        let text = content.querySelector("p");
        text.addEventListener("dblclick", () => {
            // console.log(text);
            modalEditText(text);
        });

        input.addEventListener("change", function(){
            // console.log(URL.createObjectURL(event.target.files[0]));
            let file = URL.createObjectURL(event.target.files[0]);
            let path = file.slice(5, file.length)
            console.log(label);
            label.style.backgroundImage =  `url(${file})`;
        });
        super(mediaObject);
        this.mediaObject = mediaObject;
    }
}

export { MediaObject };

// function() {
//     let modal = document.querySelector("#exampleModal");
//     modal.classList.add("show");
//     modal.style.display = "block";
//     let textArea = modal.querySelector("textarea");
//     textArea.innerText = text.innerText;

//     let modalClose = modal.querySelectorAll("button");

//     modalClose.forEach(function(closeBtn) {
//       closeBtn.addEventListener("click", () => {
//         text.innerText = textArea.value;
//         modal.classList.remove("show");
//         modal.style.display = "none";
//       });
//     });
// }