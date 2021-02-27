function clock() {
    
    const hours = document.getElementById('hour');
    const minutes = document.getElementById('minute');
    const seconds = document.getElementById('second');
    const ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    const am = 'AM';
    const pm = 'PM';

    // convert 24hour to 12 hour format with AM PM 
    if(h>12) {
        h = h -12;
        ampm.innerText = pm;
    }
    else {
        ampm.innerText = am;
    }

    hours.innerText = format(h);
    minutes.innerText = format(m);
    seconds.innerText = format(s);
}

function format(time) {
    if(time>=0){
        return time < 10 ? `0${time}` : time ;
    }
}

setInterval(clock, 1000);

