/**
 * @description sequential-class-name
 * seqClass( selector, defaultDelayTime );
 */

interface classOptions {
    delayTime? : number,
    callback? : ()=>void
}



class seqElement {
    private timer : any;
    private defaultClassOption:any = { delayTime : 100 };
    elements : NodeListOf<HTMLElement> | undefined ;
    element : HTMLElement | undefined;
    addClassList: string[] = [];
    removeClassList : string[] = [];
    constructor(selector: HTMLElement | NodeListOf<HTMLElement> , defaultDelayTime?: number) {
        if( selector.constructor === NodeList ){
            this.elements = selector as NodeListOf<HTMLElement>;
        } else {
            this.element = selector as HTMLElement;
        }
        this.timer = null;
        if( defaultDelayTime ) this.defaultClassOption.delayTime = defaultDelayTime;   
    }
    addClass( classList:string[]|string, option?:classOptions ) {
        this.addClassList = this.addClassList.concat(classList);
        this.control( this.addClassList, 'add', option );
        return this;
    }
    removeClass( classList:string[]|string, option?:classOptions ) {
        this.removeClassList = this.removeClassList.concat(classList);
        this.control( this.removeClassList, 'remove', option );
        return this;
    }
    clear() {
        if( this.timer !== null ) clearInterval(this.timer);
        this.timer = null;
        this.addClassList = [];
        this.removeClassList = [];
        return this;
    }
    private setTimer( delayTime:number, fnc:()=>void ){
        if( this.timer !== null ) clearInterval( this.timer );
        return setInterval( fnc, delayTime );
    }
    private control(classList:string[], work:string, option?:classOptions):void{
        
        let _option = Object.assign({}, this.defaultClassOption);
        if( option ){
            Object.assign(_option, option);
        }
        this.timer = this.setTimer( _option.delayTime, ()=>{
            const cls = classList.shift();
            if( !cls ){
                clearInterval( this.timer );
                this.timer = null;   
                return false;
            }
            if( classList.length === 0 && _option.callback ){
                _option.callback();
            }
            

            if( this.elements ){
                
                this.elements.forEach( element =>{
                    if( work === 'add' ){
                        element.classList.add(cls);
                    } else {
                        element.classList.remove(cls);
                    }
                } );
            } 
            if( this.element ) {
                if( work === 'add' ){
                    this.element.classList.add(cls);
                } else {
                    this.element.classList.remove(cls);
                }
            }
        } );
    }
}



function seqClass(selector: string|NodeListOf<HTMLElement>= "body", delayTime:number = 100):seqElement {
    if( typeof selector === 'string' ){
        return new seqElement(document.querySelectorAll(selector), delayTime);
    } else {
        return new seqElement(selector, delayTime);
    }
}

export default seqClass;