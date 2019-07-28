import { Element, builderApp } from './Element.js';

class Paragraph extends Element{
    
    constructor(){
        let textToAdd = prompt("Please enter the text that will be displayed.");
        let newParagraphElement = document.createElement('p');

        super(newParagraphElement);
        this.textToAdd = textToAdd;
        this.newParagraphElement = newParagraphElement;
        this.newParagraphElement.innerHTML = this.textToAdd;
        this.newParagraphElement.id = "resize-test2";
    }
}

export { Paragraph };