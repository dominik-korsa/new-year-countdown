const previousYearPeriod = 14;

let loading;

let countdown;

let timeLeftHours;
let timeLeftHoursHours;
let timeLeftHoursMinutes;
let timeLeftHoursSeconds;

let timeLeftMinutes;
let timeLeftMinutesMinutes;
let timeLeftMinutesSeconds;

let timeLeftSeconds;
let timeLeftSecondsSeconds;

let newYear;
let newYearYear;

let year;

function getTargetYear() {
  const now = new Date();
  const oneYearAhead = now.setFullYear(now.getFullYear() + 1);
  const targetYearDate = new Date(oneYearAhead - previousYearPeriod * 86400000);
  const targetYear = targetYearDate.getFullYear();
  return targetYear;
}

function update() {
  const now = new Date();
  const target = new Date(year, 0);
  const remaining = target.getTime() - now.getTime();

  if (remaining <= 0) {
    countdown.classList.remove('active');
    newYear.classList.add('active');
  } else {
    countdown.classList.add('active');
    newYear.classList.remove('active');

    const hours = Math.floor(remaining / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    if (remaining >= 3600000) { // 1 hour
      timeLeftHours.classList.add('active');
      timeLeftMinutes.classList.remove('active');
      timeLeftSeconds.classList.remove('active');

      timeLeftHoursHours.innerText = hours;
      timeLeftHoursMinutes.innerText = minutes
        .toLocaleString(undefined, { minimumIntegerDigits: 2 });
      timeLeftHoursSeconds.innerText = seconds
        .toLocaleString(undefined, { minimumIntegerDigits: 2 });
    } else if (remaining >= 60000) { // 1 minute
      timeLeftHours.classList.remove('active');
      timeLeftMinutes.classList.add('active');
      timeLeftSeconds.classList.remove('active');

      timeLeftMinutesMinutes.innerText = minutes;
      timeLeftMinutesSeconds.innerText = seconds
        .toLocaleString(undefined, { minimumIntegerDigits: 2 });
    } else {
      timeLeftHours.classList.remove('active');
      timeLeftMinutes.classList.remove('active');
      timeLeftSeconds.classList.add('active');

      timeLeftSecondsSeconds.innerText = seconds;
    }
  }
}

function setup() {
  loading = document.getElementById('loading');

  countdown = document.getElementById('countdown');

  timeLeftHours = document.getElementById('time-left-hours');
  [timeLeftHoursHours] = timeLeftHours.getElementsByClassName('hours');
  [timeLeftHoursMinutes] = timeLeftHours.getElementsByClassName('minutes');
  [timeLeftHoursSeconds] = timeLeftHours.getElementsByClassName('seconds');

  timeLeftMinutes = document.getElementById('time-left-minutes');
  [timeLeftMinutesMinutes] = timeLeftMinutes.getElementsByClassName('minutes');
  [timeLeftMinutesSeconds] = timeLeftMinutes.getElementsByClassName('seconds');

  timeLeftSeconds = document.getElementById('time-left-seconds');
  [timeLeftSecondsSeconds] = timeLeftSeconds.getElementsByClassName('seconds');

  newYear = document.getElementById('new-year');
  [newYearYear] = newYear.getElementsByClassName('year');

  year = getTargetYear();
  console.log(`Target year: ${year}`);
  newYearYear.innerText = year;

  const now = new Date();

  setTimeout(() => {
    setInterval(update, 1000);
    update();
    loading.classList.remove('active');
  }, 1000 - now.getMilliseconds());
}

document.addEventListener('DOMContentLoaded', setup);
