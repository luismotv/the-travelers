
function startTime() {
  var today = new Date();
  //console.log(today.getTimezoneOffset());
  // Set timezome

  title = document.getElementById('main-title').innerHTML;
  //console.log(title);
  switch (title) {
    case ("Travelers - Ecuador"):
      tz = today.getTime() + (today.getTimezoneOffset() * 60000) + ((-5) * 3600000);
      coutry = "Ecuador";
      break;
    case ("Travelers - Philippines"):
      tz = today.getTime() + (today.getTimezoneOffset() * 60000) + ((8) * 3600000);
      coutry = "Philippines";
      break;
    case ("Travelers - South Korea"):
      tz = today.getTime() + (today.getTimezoneOffset() * 60000) + ((9) * 3600000);
      coutry = "South Korea";
      break;
    case ("Travelers - Turkey"):
      tz = today.getTime() + (today.getTimezoneOffset() * 60000) + ((3) * 3600000);
      coutry = "Turkey";
      break;
    case ("Travelers - Vietnam"):
      tz = today.getTime() + (today.getTimezoneOffset() * 60000) + ((7) * 3600000);
      coutry = "Vietnam";
      break;
  }
  

  today.setTime(tz);
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('country-clock').innerHTML = 
  h + ":" + m + ":" + s;
  document.getElementById('country-clock').append(' (24-hour format) - Local time in ');
  document.getElementById('country-clock').append(coutry);

  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

jQuery(document).ready(function(){
  startTime();
});