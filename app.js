let myname;

function getname() {
     myname = prompt("Hey whats your name?!");

    document.write(myname); 
}
function gettime() {
    let time = prompt("what's the time?");
     
    let message;

    if (time <= 11) {
        message = "Good morning!" + myname;
    } else if (time <= 18) {
        message = "Good afternoon!" + myname;
    } else if (time <= 23) {
        message = "Good evening!" + myname;
    } else if (time == 24) {
        message = "Please try again!" + myname;
    }
     return document.write(message);

}


