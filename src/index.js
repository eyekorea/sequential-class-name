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
        this.timer = null;
    }
    addClass(classList, delayTime) {
        
    }
    removeClass(classList, delayTime) {
        console.log(this.elements);
    }
   
}

 function seqClass(selector = "body") {
    var element = new seqElement(selector);
    return element;
}

var n = seqClass('div');

n.addClass();

export default seqClass;