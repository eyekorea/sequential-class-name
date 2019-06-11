/**
 * @description sequential-class-name
 */
interface classOptions {
    delayTime?: number;
    callback?: () => void;
}
declare class seqElement {
    private timer;
    private defaultClassOption;
    elements: NodeListOf<HTMLElement>;
    addClassList: string[];
    removeClassList: string[];
    constructor(selector: string, defaultDelayTime?: number);
    addClass(classList: string[] | string, option?: classOptions): this;
    removeClass(classList: string[] | string, option?: classOptions): this;
    clear(): this;
    private setTimer;
    private control;
}
declare function seqClass(selector?: string, delayTime?: number): seqElement;
export default seqClass;
