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
