import ActiveClass from '../classes/ActiveClass.js'
import DisableClass from '../classes/DisableClass.js'
// import Timer from '../classes/Timer.js'
// import { timer } from '../modules/functions.js'

addEventListener('DOMContentLoaded', () => {
	const btnStartTest = document.querySelector('.btn-start-test')
	const startTest = new ActiveClass({
		element: document.querySelector('.test'),
		active: false,
		className: 'active',
	})
    const disableFrameTestStart = new DisableClass({
			element: document.querySelector('.start-test'),
			disable: false,
			className: 'disable',
		})
		const disableTest = new DisableClass({
			element: document.querySelector('.test'),
			disable: false,
			className: 'disable',
		})
	// const startTimer = new Timer({
	// 	time: 1,
	// 	elemMin: document.querySelector('.time-min'),
	// 	elemSec: document.querySelector('.time-sec'),
	// 	started: true,
	// })
	btnStartTest.onclick = () => {
		startTest.setActive(true)
		disableTest.setDisable(false)
        disableFrameTestStart.setDisable(true)
		// timer()
		startTimer.start()
	}

})
