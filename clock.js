function displayTime() {
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let session;
    let date = time.getDay();

    const Weekdays = ['','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    
    // time Format
    if(hour == 0){
        hour = 12;
    }

    // AM PM identify
    if (hour > 12){
            // time format
        hour = hour - 12;
        session = 'PM'
    } else {
        session = 'AM'
    }

    hour = (hour < 10) ? '0' + hour : hour;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    showTime = hour + ':' + minutes + ':' + seconds + ':' + session;

    document.querySelector('h1').innerHTML = showTime;
    document.querySelector('h2').innerHTML = Weekdays[date];

    setTimeout(displayTime, 1000);

};

displayTime();