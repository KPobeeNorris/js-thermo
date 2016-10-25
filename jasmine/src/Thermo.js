

function Thermostat () {
  this.currTemp = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.powerSave = true;
}

Thermostat.prototype.currTemp = function () {
  var currTemp = 20;
};

Thermostat.prototype.increase = function () {
  this.currTemp ++;
};

Thermostat.prototype.decrease = function () {
  this.currTemp --;
};

Thermostat.prototype.setPowerSave = function() {
  if (this.powerSave === true)  {
    this.maxTemp = 25;
  } else {
    this.maxTemp = 32;
  }
};

Thermostat.prototype.isPowerSave = function (state) {
  this.powerSave = state;
};
