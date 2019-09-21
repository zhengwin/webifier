import { Element } from './Element.js';

class Image extends Element {
    constructor() {
        let image = document.createElement("img");
        image.style.width = "200px";
        image.style.height = "200px";
        image.id = "inserted-image";
        image.src = URL.createObjectURL(event.target.files[0]);
        console.log(URL.createObjectURL(event.target.files[0]));
        super(image);
        this.image = image;
        console.log(this.image);

        this.dragMouseHandler = this.dragMouse.bind(this);
        this.closeDragHandler = this.closeDrag.bind(this);
        this.imageResizeHandler = this.imageResize.bind(this);

        this.image.addEventListener("mousedown", this.dragMouseHandler);
        // this.image.addEventListener("mousedown", this.imageResizeHandler);
    }

    dragMouse(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        this.positions.pos3 = e.clientX;
        this.positions.pos4 = e.clientY;
        this.element.addEventListener("mouseup", this.closeDragHandler);
        document.addEventListener("mousemove", this.imageResizeHandler);
      }

      closeDrag() {
        // stop moving when mouse button is released:
        document.removeEventListener("mousemove", this.imageResizeHandler);
        this.element.removeEventListener("mouseup", this.closeDragHandler);
      }

    imageResize(e) {
        this.positions.pos1 = this.positions.pos3 - e.clientX;
        this.positions.pos2 = this.positions.pos4 - e.clientY;
        this.positions.pos3 = e.clientX;
        this.positions.pos4 = e.clientY;

        this.image.style.width = `${this.image.offsetWidth - this.positions.pos1}px`;
        this.image.style.height = `${this.image.offsetHeight - this.positions.pos2}px`;
    }
}

export { Image };