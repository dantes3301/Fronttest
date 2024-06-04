export function isWebp(){
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {

        if (support == true) {
            document.querySelector('html').classList.add('webp');
        }else{
            document.querySelector('html').classList.add('no-webp');
        }
    });
}

export function lockBody(){
    document.body.style.overflow = 'hidden'
}
export function unlockBody() {
	document.body.style.overflow = 'visible'
}
// export function timer(){
//     let time = 5
//     let startTime = new Date()
//     let stopTime = startTime.setMinutes(startTime.getMinutes() + time)
//     console.log(stopTime);
//     setInterval(() => {
//         let timeNow = new Date().getTime()
//         let remain = startTime - timeNow
//         let min = Math.floor( (remain % (1000 * 60 * 60 * 60)) / (1000 * 60))
//         let sec = Math.floor((remain % (1000 * 60 )) / (1000))
//         console.log(min, sec)
//     },1000)
// }

