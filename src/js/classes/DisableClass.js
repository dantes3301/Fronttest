export default class DisableClass {
	_disable = false
	constructor({ element, disable = true, className = 'disable' }) {
		this._className = className
        console.log(element);
		if (element.nodeType == 1) {
			this._element = element
		} else {
			this.element = document.querySelector(element)
		}
		if (disable) {
			this.setDisable(disable)
			this._setClass()
		}
	}
	setDisable(value) {
		this._disable = value
		this._setClass()
	}
	_setClass() {
		if (this._disable) {
			this._element.classList.add(this._className)
		} else {
			this._element.classList.remove(this._className)
		}
	}
	get disable() {
		return this._disable
	}
	get element() {
		return this._element
	}
}
