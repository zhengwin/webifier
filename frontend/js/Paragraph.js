import { Element } from './Element.js';

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
                this.newParagraphElement.id = "delete-border";
            }
            else{
                this.newParagraphElement.id = "resize-test2";
            }
        });
        // testBtn.addEventListener("click", console.log("test class clicked"));
    }
}

export { Paragraph };