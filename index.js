const newYearData = "1 Jan 2023";
function countDown() {
  const newDate = new Date(newYearData);
  const currentDate = new Date();

  // convert from milliseconds to seconds
  const totalSeconds = (newDate - currentDate) / 1000;
  //gettig days from the total seconds
  const days = Math.floor(totalSeconds / 3600 / 24);
  //getting hours from the remaining total seconds
  const hours = Math.floor(totalSeconds / 60 / 60) % 60;
  //getting minutes
  const minutes = Math.floor(totalSeconds / 60) % 60;
  //calculating seconds
  const seconds = Math.floor(totalSeconds % 60);
  console.log(days, hours, minutes, seconds);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}
setInterval(countDown, 1000);
