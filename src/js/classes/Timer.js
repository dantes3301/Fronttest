import { Value } from "sass"

export default class Timer {
	constructor({ time, elemMin, elemSec, started = false }) {
        this._elemMin = elemMin
        this._elemSec = elemSec
		this._time = time
		this._started = false

	}
    start(){
        this._startTime = new Date()
        this._stopTime = this._startTime.setMinutes(
            this._startTime.getMinutes() + this._time
        )
        const self = this

        this._interval = setInterval(self._calc.bind(self), 1000)
        if(this._sec === 0){
        }
    }
    _calc (){
   this._timeNow = new Date().getTime()
		this._remain = this._startTime - this._timeNow
		this._min = Math.floor((this._remain % (1000 * 60 * 60 * 60)) / (1000 * 60))
		this._sec = Math.floor((this._remain % (1000 * 60)) / 1000)
		this._elemMin.innerHTML = this._min
		this._elemSec.innerHTML = this._sec
        if (this._sec === 0 && this._min === 0 ) {
            clearInterval(this._interval)
            this._elemSec.innerHTML = '0' + this._sec
        }
        else if (this._sec < 10) {
            this._elemSec.innerHTML = '0' + this._sec
        }
    }

	
}
