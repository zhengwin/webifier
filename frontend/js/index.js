const { Element, builderApp } = require('./Element')

document.addEventListener("DOMContentLoaded", main);

function main() {

  let newElement = new Element();

    // Make the DIV element draggable:
    resizeTest =  new Element(document.querySelector("#resize-test2"));

    // Toolbox
    dragBtn = document.querySelector('#drag-element-button').children[0];
    dragBtn.addEventListener("click", toolBox.enableDrag);
    resizeBtn = document.querySelector('#resize-element-button').children[0];
    resizeBtn.addEventListener("click", toolBox.enableResize);

//     const insertParagraphButton = document.querySelector("#insert-paragraph-dropdown-item");
//     insertParagraphButton.addEventListener('click', function(){ insertElement('paragraph')});

//     const insertImageButton = document.querySelector("#insert-image-dropdown-item");
//     insertImageButton.addEventListener('click', insertImage('image'));

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
  }
}





