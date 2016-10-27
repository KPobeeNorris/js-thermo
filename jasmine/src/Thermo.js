function Thermostat () {
  this.currTemp = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.powerSave = true;
  this._energyUsage = "medium-usage";
}

Thermostat.prototype.increase = function () {
  if(this.powerSave === true && this.currTemp === 25) {
    throw "Maximum temperature reached";
  }
  else if(this.powerSave === false && this.currTemp === 32) {
    throw "Maximum temperature reached";
  }
  else {
  this.currTemp ++;
}
this.energyUsage();
};

Thermostat.prototype.decrease = function () {
  if(this.currTemp <= 10) {
    throw ("Minimum temperature reached");
  }
  else {
  this.currTemp --;
}
this.energyUsage();
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

Thermostat.prototype.reset = function () {
  this.currTemp = 20;
  this.energyUsage();
};

Thermostat.prototype.energyUsage = function () {
  if(this.currTemp < 18) {
    this._energyUsage = "low-usage";
  }
  else if(this.currTemp < 25) {
    this._energyUsage = "medium-usage";
  }
  else {
    this._energyUsage = "high-usage";
  }
};
