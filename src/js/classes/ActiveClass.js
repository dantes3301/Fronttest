export default class ActiveClass {
	_active = false
	constructor({ element, active = true, className = 'active' }) {
		this._className = className
		if (element.nodeType == 1) {
			this._element = element
		} else {
			this.element = document.querySelector(element)
		}
		if (active) {
			this.setActive(active)
			this._setClass()
		}
	}
	setActive(value) {
		this._active = value
		this._setClass()
	}
	_setClass() {
		if (this._active) {
			this._element.classList.add(this._className)
		} else {
			this._element.classList.remove(this._className)
		}
	}
	get active() {
		return this._active
	}
	get element() {
		return this._element
	}
}
