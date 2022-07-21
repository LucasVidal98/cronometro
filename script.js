var sec = 0;
var min = 0;
var hra= 0;
var num = document.getElementById('contador');
var intervalo;


function play(){
    intervalo = setInterval(contador,1000);
}

function pause(){
    clearInterval (intervalo);
}

function stop(){
    clearInterval(intervalo);
    sec = 0;
    min = 0;
    num.innerText = '00:00:00';
}

function doisdigitos (digit){
    if (digit < 10){
        return ('0' + digit);
    }else {
        return (digit);
    }
}

function contador (){
    sec++
    if (sec == 60){
        min++
        sec=0
        if (min==60){
            min = 0
            hra++
        }
    }
    num.innerText= doisdigitos (hra) + ':' + doisdigitos (min) + ':' + doisdigitos (sec)
}
