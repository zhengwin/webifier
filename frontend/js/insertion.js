import { Paragraph } from './Paragraph.js';
import { Image } from './Image.js';

/*  Inserts a HTML tag (elementType) into the main canvas. 
    elementType parameter must be a valid HTML element tag.
*/
function insertElement(elementType) {

    const mainCanvas = document.querySelector('#main-canvas')

    const newElement = createElement(elementType);
    console.log(newElement);

    // if (typeof insertElement.counter == 'undefined') {
    //     insertElement.counter = 0
    // } else {
    //     insertElement.counter += 1
    // }

    // newElement.id = `element${insertElement.counter}`

    mainCanvas.appendChild(newElement)

    // const temp = new Element(document.querySelector(`#${newElement.id}`))
    
}

function createElement(elementType) {
    switch(elementType) {
        case 'paragraph':
            let p = new Paragraph();
            return p.newParagraphElement;
        case 'image':
            let img = new Image();
            return img.image;
        default:
            return document.createElement(elementType)
    }
}

export { createElement, insertElement };


