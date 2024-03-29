let builderApp = {
    activeElements: [],
    deleteElements: [],
    navBar: document.querySelector('#nav-bar')
  }

class Element {

    readyDelete = false;

    constructor(element) {
        // store functions so they can be referenced later
        this.dragMouseDownHandler = this.dragMouseDown.bind(this);
        this.elementDragHandler = this.elementDrag.bind(this);
        this.closeDragElementHandler = this.closeDragElement.bind(this);
        this.enableResizeHandler = this.enableResize.bind(this);
  
        // default settings
        this.element = element;
        this.element.style.cursor = "move";
        this.element.addEventListener("mousedown", this.dragMouseDownHandler);
        this.element.style.position = "absolute";
        this.positions = {pos1: 0, pos2: 0, pos3: 0, pos4: 0};
        builderApp.activeElements.push(this);

        this.element.addEventListener("click", () => {
          this.readyDelete = !this.readyDelete;

          if(this.readyDelete){
              // this.newParagraphElement.id = "delete-border";
              this.element.classList.add("delete-border");
              console.log("ELEMENT DETAILS ", this.element);
              builderApp.deleteElements.push(this);
          }
          else{
              for(var i = 0; i < builderApp.deleteElements.length; i++){
                  if(builderApp.deleteElements[i] == this){
                      builderApp.deleteElements.splice(i,1);
                  }
              }
              this.element.classList.remove("delete-border");
          }
      });
    }

    Delete() {
      this.element.remove();
    }

    dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      this.positions.pos3 = e.clientX;
      this.positions.pos4 = e.clientY;
      document.addEventListener("mouseup", this.closeDragElementHandler);
      document.addEventListener("mousemove", this.elementDragHandler);
    }
    
    elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      this.positions.pos1 = this.positions.pos3 - e.clientX;
      this.positions.pos2 = this.positions.pos4 - e.clientY;
      this.positions.pos3 = e.clientX;
      this.positions.pos4 = e.clientY;
      
      // set the element's new position:
      const offsetTop = (this.element.offsetTop - this.positions.pos2);
      const offsetLeft = (this.element.offsetLeft - this.positions.pos1);

      // if statements are constraints so that elements cannot be dragged off the canvas
      if (offsetTop < builderApp.navBar.offsetHeight) {
        this.element.style.top = builderApp.navBar.offsetHeight + "px"
      } else {
        this.element.style.top = offsetTop + "px";
      }
      if (offsetLeft < 0) {
        this.element.style.left = "0px"
      } else {
        this.element.style.left = offsetLeft + "px";
      }
    }
    
    closeDragElement() {
      // stop moving when mouse button is released:
      document.removeEventListener("mousemove", this.elementDragHandler);
      document.removeEventListener("mouseup", this.closeDragElementHandler);
    }
  
    enableDrag() {
      this.element.style.cursor = "move";
      this.element.removeEventListener("mousedown", this.enableResizeHandler);
      this.element.addEventListener("mousedown", this.dragMouseDownHandler);
    }
  
    enableResize(e) {
      this.element.style.resize = "both";
      this.element.style.cursor = "se-resize";
      this.element.style.overflow = "auto";
      this.element.removeEventListener("mousedown", this.dragMouseDownHandler);
      this.closeDragElement();
    }
  }

export { Element, builderApp };