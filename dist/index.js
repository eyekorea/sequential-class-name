/**
 * @description sequential-class-name
 * seqClass( selector, defaultDelayTime );
 */
class seqElement {
    constructor(selector, defaultDelayTime) {
        this.defaultClassOption = { delayTime: 100 };
        this.addClassList = [];
        this.removeClassList = [];
        this.elements = (typeof selector === 'string') ? document.querySelectorAll(selector) : selector;
        this.timer = null;
        if (defaultDelayTime)
            this.defaultClassOption.delayTime = defaultDelayTime;
    }
    addClass(classList, option) {
        this.addClassList = this.addClassList.concat(classList);
        this.control(this.addClassList, 'add', option);
        return this;
    }
    removeClass(classList, option) {
        this.removeClassList = this.removeClassList.concat(classList);
        this.control(this.removeClassList, 'remove', option);
        return this;
    }
    clear() {
        if (this.timer !== null)
            clearInterval(this.timer);
        this.timer = null;
        this.addClassList = [];
        this.removeClassList = [];
        return this;
    }
    setTimer(delayTime, fnc) {
        if (this.timer !== null)
            clearInterval(this.timer);
        return setInterval(fnc, delayTime);
    }
    control(classList, work, option) {
        let _option = Object.assign({}, this.defaultClassOption);
        if (option) {
            Object.assign(_option, option);
        }
        this.timer = this.setTimer(_option.delayTime, () => {
            const cls = classList.shift();
            if (!cls) {
                clearInterval(this.timer);
                this.timer = null;
                return false;
            }
            if (classList.length === 0 && _option.callback) {
                _option.callback();
            }
            this.elements.forEach(element => {
                if (work === 'add') {
                    element.classList.add(cls);
                }
                else {
                    element.classList.remove(cls);
                }
            });
        });
    }
}
function seqClass(selector = "body", delayTime = 100) {
    if (typeof selector !== 'string') {
        if (selector.constructor !== NodeList) {
            new Error('selector 는 nodeList 이거나 selector 로 지정될 string 이어야 합니다.');
        }
    }
    return new seqElement(selector, delayTime);
}
export default seqClass;
//# sourceMappingURL=index.js.map