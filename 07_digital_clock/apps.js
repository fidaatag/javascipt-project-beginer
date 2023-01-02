// let date = new Date();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let day = date.getDay();

// display the date and time using querySelector
const time = document.querySelector('.time');
const dateTime = document.querySelector('.date-time') 

// create a function that will calculate the curreny time n date in the display
function updateClock() {

    // get the current time, day, month, and year
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDay();
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    // console.log(now)
    // console.log(hours)
    // console.log(minutes)
    // console.log(seconds)

    // create value array from name days and month
    const dayName = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const monthName = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember'];

    // format date and time
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    date = date < 10 ? '0' + date : date;

    console.log(5%12)

    // display date and time
    const period = hours < 12 ? 'AM' : 'PM'; 
    // console.log(period);
    time.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + period;
    dateTime.innerHTML = dayName[day] + ', ' + monthName[month] + ' ' + date + ', ' + year;
}

updateClock();
setInterval(updateClock, 1000)