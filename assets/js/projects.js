const excusesDiv = document.getElementById("excuses");

function checkTime(){
    const now = new Date();
    const then = new Date(Date.parse("05 Aug 2022 21:00:00 CST"));
    const seconds = now.getSeconds() - then.getSeconds();
    const minutes = now.getMinutes() - then.getMinutes();
    let hours = now.getHours() - then.getHours();
    let days = now.getDate() - then.getDate();
    let months = now.getMonth() - then.getMonth();
    let years = now.getFullYear() - then.getFullYear();

    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        switch (months) {
            case 0: //August
                days += 31;
                break;
            case 1: //September
                days += 30;
                break;
            case 2: //October
                days += 31;
                break;
            case 3: //November
                days += 30;
                break;
            case 4: //December
                days += 31;
                break;
            case 5: //January
                days += 31;
                break;
            case 6: //Feburary
                days += 28
                break;
            case 7: //March
                days += 31;
                break;  
            case 8: //April
                days += 30;
                break;  
            case 9: //May
                days += 31;
                break; 
            case 10: //June
                days += 30;
                break;  
            case 11: //July
                days += 31;
                break;     
            default:
                break;
        }
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }
     
    let timerString = "";
    if (years == 1) {
        timerString += "1 year, "
    } else if (years > 1) {
        timerString +=  years + " years, "
    }

    if (months == 1) {
        timerString += "1 month, "
    } else if (months > 1) {
        timerString +=  months + " months, "
    }

    if (days == 1) {
        timerString += "1 day, "
    } else {
        timerString +=  days + " days, "
    }

    if (hours == 1) {
        timerString += "1 hour, "
    } else {
        timerString +=  hours + " hours, "
    }

    if (minutes == 1) {
        timerString += "1 minute, and "
    } else {
        timerString +=  minutes + " minutes, and "
    }

    if (seconds == 1) {
        timerString += "1 second"
    } else {
        timerString +=  seconds + " seconds"
    }

    document.getElementById("creationTimer").innerHTML = timerString;
}

function randomExcuse(){
    const excuses = ["a break in the space-time continuum", "a murder mystery gone wrong", 
    "hijinks involving a zebra, tap-dancing monks, and canned peaches", "the season finale of the award-winning Westworld",
    "a suprising amount of kitchen knives", "integration hell", "entering the rabbit hole of an endless spreadsheet",
    "reminiscing with friends about the good ol' days", "the troll under the bridge", "shenanigans, tomfoolery and even horseplay",
    "a blatent disregard of the rules", "a subversion of social dogma", "poor decision-making skills", 
    "a particularly intense game of apples to apples", "a lack of plausable deniablity", "a dazzling rendition of Don't Stop Believing",
    "finding common ground on loving pistachio crumbles", "a rad picture of a dog on a skateboard", "the implications",
    "technical difficulties", "human error"];
    excusesDiv.innerHTML = excuses[Math.round((excuses.length - 1) * Math.random())];
}

setInterval(checkTime);
randomExcuse();
excusesDiv.addEventListener("click", randomExcuse);
