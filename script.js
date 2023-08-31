let milesec = 0;
let sec = 0; 

let appendMilesec = document.getElementById('tens');
let appendSec = document.getElementById('seconds');
let buttonStart = document.getElementById('button-start');
let buttonPause = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');

var Interval;

function startWatch(){
    milesec++;
    if(milesec < 9){
        appendMilesec.innerHTML = '0'+ milesec;
    }
    if(milesec > 9){
        appendMilesec.innerHTML = milesec;
    }
    if( milesec > 99){
        sec++;
        appendSec.innerHTML = '0' + sec;
        milesec = 0;
        appendMilesec.innerHTML = '0' + milesec;
    }
    if(sec > 9){
        appendSec.innerHTML = sec;
    }
}

buttonStart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startWatch, 10);
}

buttonPause.onclick = function(){
    clearInterval(Interval);
}

buttonReset.onclick = function(){
    clearInterval(Interval);
    milesec = 0;
    sec = 0;
    appendMilesec.innerHTML = '0' + milesec;
    appendSec.innerHTML = '0' + sec;
}