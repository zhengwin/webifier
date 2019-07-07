import { Element } from './Element.js';

class Image extends Element {
    constructor() {
        let image = document.createElement("img");
        image.style.width = "200px";
        image.style.height = "200px";
        image.id = "inserted-image"
        image.src = URL.createObjectURL(event.target.files[0]);
        super(image);
        this.image = image;
        console.log(this.image);
    }
}

export { Image };