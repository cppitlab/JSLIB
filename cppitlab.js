class cppitlab {

    createElement(elementName) {
        // this method is used to create element 
        if (elementName !== undefined && elementName !== null && typeof elementName == "string")
            this.element = document.createElement(elementName);
    }
    addStyle(data) { // this method is used to add style in element. style css data must be written in object
        if (data !== undefined && data !== null && typeof data == "object")
            for (let prop in data) {
                console.log(prop)
                this.element.style[prop] = data[prop];
            }
    }
    showInfo() {
        // this method will show information about element
        if (this.element !== undefined && this.element !== null) {
            console.log("======================== Information =============================");
            console.log("Element you Created : ", this.element);
            console.log("==================================================================");

        }
    }
    clear() {
        this.element = null;
    }

}; // end of class

let x = new cppitlab;
x.createElement("h1");
x.showInfo();