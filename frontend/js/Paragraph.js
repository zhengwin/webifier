import { Element, builderApp } from './Element.js';

class Paragraph extends Element{
    
    constructor(){
        let textToAdd = prompt("Please enter the text that will be displayed.");
        let newParagraphElement = document.createElement('p');

        super(newParagraphElement);
        this.textToAdd = textToAdd;
        this.newParagraphElement = newParagraphElement;
        this.newParagraphElement.innerHTML = this.textToAdd;
        this.newParagraphElement.classList.add("paragraph");
        this.newParagraphElement.classList.add("element-text");
        this.closeModalHandler = this.closeModal.bind(this);
        this.editTextHandler = this.editText.bind(this);

        this.newParagraphElement.addEventListener("dblclick", () => {
            this.editText(this.closeModalHandler);
        });
        newParagraphElement.addEventListener("click", () => {
            this.readyDelete = !this.readyDelete;

            if(this.readyDelete){
                this.newParagraphElement.id = "delete-border";
                // this.newParagraphElement.className = "testClass";
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
        this.newParagraphElement.id = "resize-test2";
    }

    closeModal(e) {
        let modal = document.querySelector("#exampleModal");
        let textArea = modal.querySelector("textarea");

        if (e.target.id == "edit-modal-save") {
            this.newParagraphElement.innerText = textArea.value;
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
        textArea.innerText = this.newParagraphElement.innerText;
        
        let modalCloseBtn = modal.querySelectorAll("button");

        modalCloseBtn.forEach( function(closeBtn) {
            // console.log(this.text);
            closeBtn.addEventListener("click", closeModalHandler);
        });
    } 
}

export { Paragraph };