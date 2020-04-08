
function startTime() {
  var today = new Date();
  console.log(today.getTimezoneOffset());
  tz = today.getTime() + (today.getTimezoneOffset() * 60000) + ((-5) * 3600000);
  today.setTime(tz);
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('country-clock').innerHTML = 
  h + ":" + m + ":" + s;
  document.getElementById('country-clock').append(' Local time Ecuador');
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

jQuery(document).ready(function(){
  startTime();
});