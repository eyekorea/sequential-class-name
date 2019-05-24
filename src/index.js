/**
 * @description sequential-class-name
 */
const o = {
    element: document.body,
    classList: ['ready', 'active'],
    delayTime: 100,
    add: false,
    callback: null
}
async function classAddon(){
    
};
class seqElement {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
    }
    addClass(delayTime, ...classList) {

    }
    removeClass(delayTime, ...classList) {

    }
   
}

 function seqClass(selector = "body") {
    var element = new seqElement(selector);
    return element;
}

// var n = seqClass('body');

export default seqClass;