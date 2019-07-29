import { Element, builderApp } from './Element.js';
import { createElement, insertElement } from './insertion.js';  

document.addEventListener("DOMContentLoaded", main);

function main() {
  //tryitout button
  let tryItOut = document.querySelector("#try-it-out-btn");
  tryItOut.addEventListener("click", () => {
    let cover = document.querySelector("#cover");
    cover.style.display = "none";

    // make a demo paragraph 
    let testParagraph = document.createElement("div");
    testParagraph.classList.add("paragraph");
    let p = document.createElement("p");
    p.innerHTML = "Click the button, then hold to drag. To Resize, click the resize button and click bottom right hand corner";
    testParagraph.appendChild(p);
    let mainCanvas = document.querySelector("#main-canvas");
    mainCanvas.appendChild(testParagraph);

    let resizeTest =  new Element(testParagraph);
  });

  // Toolbox
  let dragBtn = document.querySelector('#drag-element-button');
  dragBtn.addEventListener("click", toolBox.enableDrag);
  let resizeBtn = document.querySelector('#resize-element-button');
  resizeBtn.addEventListener("click", toolBox.enableResize);
  let deleteBtn = document.querySelector('#delete-element-button');
  deleteBtn.addEventListener("click", toolBox.deleteElements);

  const insertParagraphButton = document.querySelector("#insert-paragraph-dropdown-item");
  insertParagraphButton.addEventListener('click', function(){ insertElement('paragraph')});

  const insertImageButton = document.querySelector("#file");
  insertImageButton.addEventListener("change", () => { insertElement('image')});

  const insertMediaObjectButton = document.querySelector("#insert-media-object-item");
  insertMediaObjectButton.addEventListener("click", () => { insertElement('mediaObject')});


//     const insertImageButton = document.querySelector("#insert-hyperlink-dropdown-item");
//     insertImageButton.addEventListener('click', insertImage('hyperlink'));

//     const insertImageButton = document.querySelector("#insert-input-dropdown-item");
//     insertImageButton.addEventListener('click', insertImage('input'));
}

let toolBox = {
  enableDrag: () => {
    let {activeElements} = builderApp;
    activeElements.forEach(element => {
      element.enableDrag();
    });
  },
  enableResize: () => {
    let {activeElements} = builderApp;
    activeElements.forEach(element => {
      element.enableResize();
    });
  },
  deleteElements: () => {
    for(var element of builderApp.deleteElements){
      element.Delete();
    }
    builderApp.deleteElements = [];
  }

}




