/**
 * @description sequential-class-name
 * seqClass( selector, defaultDelayTime );
 */
interface classOptions {
    delayTime?: number;
    callback?: () => void;
}
declare class seqElement {
    private timer;
    private defaultClassOption;
    elements: NodeListOf<HTMLElement> | undefined;
    element: HTMLElement | undefined;
    addClassList: string[];
    removeClassList: string[];
    constructor(selector: HTMLElement | NodeListOf<HTMLElement>, defaultDelayTime?: number);
    addClass(classList: string[] | string, option?: classOptions): this;
    removeClass(classList: string[] | string, option?: classOptions): this;
    clear(): this;
    private setTimer;
    private control;
}
declare function seqClass(selector?: string | NodeListOf<HTMLElement> | HTMLElement, delayTime?: number): seqElement;
export default seqClass;
