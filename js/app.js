const endDate = "1 July 2024 10:00 PM"

document.querySelector('#end-date').innerText = endDate;
const inputs = document.querySelectorAll('input')

console.log(inputs)

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;  //difference is in milli seconds
    //console.log(diff);
    // convert into days

    if( diff < 0) return;



    inputs[0].value = Math.floor(diff /3600 / 24);

    // convert into hours
    inputs[1].value = Math.floor(diff /3600) % 24;

    // convert into minutes
    inputs[2].value = Math.floor(diff /60) % 60 ;

    // convert into minutes
    inputs[3].value = Math.floor(diff %60) ;
}

setInterval(
    () => {
        clock()
    }, 1000           // clock funtion 1 sec par chal rha hai
)