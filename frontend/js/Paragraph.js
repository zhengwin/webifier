import { Element, builderApp } from './Element.js';

class Paragraph extends Element{
    readyDelete = false;

    constructor(){
        let textToAdd = prompt("Please enter the text that will be displayed.");
        let newParagraphElement = document.createElement('p');

        super(newParagraphElement);
        this.textToAdd = textToAdd;
        this.newParagraphElement = newParagraphElement;
        this.newParagraphElement.innerHTML = this.textToAdd;
        this.newParagraphElement.id = "resize-test2";
        newParagraphElement.addEventListener("click", () => {
            this.readyDelete = !this.readyDelete;

            if(this.readyDelete){
                // this.newParagraphElement.id = "delete-border";
                this.newParagraphElement.className = "testClass";
                console.log("ELEMENT DETAILS ", this.newParagraphElement);
                builderApp.deleteElements.push(this);
            }
            else{
                for(var i = 0; i < builderApp.deleteElements.length; i++){
                    if(builderApp.deleteElements[i] == this){
                        builderApp.deleteElements.splice(i,1);
                    }
                }
                this.newParagraphElement.id = "resize-test2";
            }
        });
    }

    Delete() {
        this.newParagraphElement.remove();
    }
}

export { Paragraph };