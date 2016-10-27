jQuery(document).ready(function () {

  var thermostat = new Thermostat();
  console.log(thermostat);

  $('#current_temp').text(thermostat.currTemp);

  $('#increase_temp').on('click', function () {
    thermostat.increase();
    $('#current_temp').text(thermostat.currTemp);
  });

  $('#decrease_temp').on('click', function () {
    thermostat.decrease();
    $('#current_temp').text(thermostat.currTemp);
  });



});
