// Javascript Date and Time
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  // Get the days of the week
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var day = daysOfWeek[today.getDay()];

  document.getElementsByClassName('txt dy')[0].innerHTML = day;

  m = checkTime(m);
  s = checkTime(s);
  document.getElementsByClassName('txt tm')[0].innerHTML = h + ':' + m + ':' + s + ' in Kathmandu';

  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
