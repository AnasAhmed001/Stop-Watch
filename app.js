const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');


let startInterval;
let seconds = 0;
function startWatch() {
    console.log('watch started');
    startInterval = setInterval(function () {
        seconds += 1;
        second.innerHTML= seconds
        console.log(seconds)
    }, 1000);
    
}
function stopWatch() {
    console.log('watch stop')
    clearInterval(startInterval);
   
}
function resetWatch() {
    console.log('watch reset')
    seconds = 0;
    second.innerHTML=0;
    
    
    
}
