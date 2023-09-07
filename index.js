const currentUTCTimeEl = document.querySelector('[data-testid="currentUTCTime"]');
const currentDayOfTheWeekEl = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);


const date = new Date();
const getDay = date.getDay();

console.log(date)

let currentTime = date.getUTCMilliseconds();


let currentDayOfTheWeek 

if(getDay === 1){
    currentDayOfTheWeek = 'Monday'
} else if (getDay === 2 ){
    currentDayOfTheWeek = 'Tuesday'
} else if (getDay === 3 ){
    currentDayOfTheWeek = 'Wednesday'
} else if (getDay === 4 ){
    currentDayOfTheWeek = 'Thursday'
} else if (getDay === 5 ){
    currentDayOfTheWeek = 'Friday'
} else if (getDay === 6 ){
    currentDayOfTheWeek = 'Saturday'
} else if (getDay === 7){
    currentDayOfTheWeek = 'Sunday'
}

currentDayOfTheWeekEl.innerHTML = currentDayOfTheWeek
currentUTCTimeEl.innerHTML = currentTime

