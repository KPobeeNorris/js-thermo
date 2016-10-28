jQuery(document).ready(function () {

  var thermostat = new Thermostat();
  console.log(thermostat);

  $('#current_temp').text(thermostat.currTemp);

  $('#increase_temp').on('click', function () {
    thermostat.increase();
    $('#energy_usage').text(thermostat._energyUsage);
    energyColor();
    $('#current_temp').text(thermostat.currTemp);
  });

  $('#decrease_temp').on('click', function () {
    thermostat.decrease();
    $('#energy_usage').text(thermostat._energyUsage);
    energyColor();
    $('#current_temp').text(thermostat.currTemp);
  });

  $('#reset').on('click', function () {
    thermostat.reset();
    $('#energy_usage').text(thermostat._energyUsage);
    energyColor();
    $('#current_temp').text(thermostat.currTemp);
  });

  $('#power_save').on('click', function () {
    if(thermostat.powerSave === true) {
      thermostat.isPowerSave(false);
      $('h5').text("OFF");
    }
    else {
      thermostat.isPowerSave(true);
      $('h5').text("ON");
    }
  });

  function energyColor() {
    if(thermostat._energyUsage === "high-usage") {
      $('#energy_usage').css('color', 'red');
    }
    else if(thermostat._energyUsage === "medium-usage") {
      $('#energy_usage').css('color', 'black');
    }
    else {
      $('#energy_usage').css('color', 'green');
    }
  }

});

var weather = new XMLHttpRequest();
weather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=london,uk&units=metric&appid=6f5342188239bb216c80d93c7bc96475", false);
weather.send();
var r = JSON.parse(weather.response);
var temp = "Current temperature: " + r.main.temp + " celcius" + "<br/>";
var weather = "Current location: " + r.name + "<br/>";
document.getElementById("temp").innerHTML = temp;
document.getElementById("weather").innerHTML = weather;

$("#form").submit(function(stop) {
  stop.preventDefault();
  var city = $("#city").val();
  var second = new XMLHttpRequest();
  second.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=6f5342188239bb216c80d93c7bc96475", false);
  second.send();
  var r = JSON.parse(second.response);
  var temp = "Current temperature: " + r.main.temp + " celcius" + "<br/>";
  var weather = "Current location: " + r.name + "<br/>";
  document.getElementById("temp").innerHTML = temp;
  document.getElementById("weather").innerHTML = weather;
});
