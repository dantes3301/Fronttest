export default class ActiveClass{
    _active = false
    constructor({element, active = true, className = "active"}){
        this._className = className
        if (element.nodeType == 1){
            this._element = element
        }
        else{
            this.element = document.querySelector(element)
        }
        if (active){
           
        }
    }
}