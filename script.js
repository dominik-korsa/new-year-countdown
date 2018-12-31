const previousYearPeriod = 14;

let year;

function getTargetYear() {
  const now = new Date();
  const oneYearAhead = now.setFullYear(now.getFullYear() + 1);
  const targetYearDate = new Date(oneYearAhead - previousYearPeriod * 86400000);
  const targetYear = targetYearDate.getFullYear();
  return targetYear;
}

document.addEventListener('DOMContentLoaded', () => {
  year = getTargetYear();
  console.log(`Target year: ${year}`);
  document.querySelector('#new-year .year').innerText = year;
});
