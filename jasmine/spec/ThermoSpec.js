describe ("Thermostat", function () {

var thermostat;

beforeEach(function() {
  thermostat = new Thermostat();
});

  it('should have a starting value of 20 degrees', function (){
    expect(thermostat.currTemp).toEqual(20);
  });

  it('should expect the temperature to increase by 1', function (){
    thermostat.increase();
    expect(thermostat.currTemp).toBeGreaterThan(20);
  });

  it('should expect the temperature to decrease by 1', function (){
    thermostat.decrease();
    expect(thermostat.currTemp).toBeLessThan(20);
  });

  it('should have a minimum temperature of 10 degrees', function (){
    expect(thermostat.minTemp).toEqual(10);
  });

  it('should not allow users to reduce the temperature below 10 degrees', function () {
    thermostat.currTemp = 10;
    expect(function() {thermostat.decrease();}
  ).toThrow("Minimum temperature reached");
  });

  it('should have a max temperature of 25 degrees if power saving is on', function(){
    thermostat.isPowerSave(true);
    thermostat.setPowerSave();
    expect(thermostat.maxTemp).toEqual(25);
  });

  it('should have a max temperature of 32 degrees if power saving is off', function(){
    thermostat.isPowerSave(false);
    thermostat.setPowerSave();
    expect(thermostat.maxTemp).toEqual(32);
  });

  it('should not allow users to increase the temperature above the maximum temperature', function () {
    thermostat.currTemp = 25;
    expect(function() {thermostat.increase();}
  ).toThrow("Maximum temperature reached");
  });

  it('should not allow users to increase the temperature above the maximum temperature', function () {
    thermostat.powerSave = false;
    thermostat.currTemp = 32;
    expect(function() {thermostat.increase();}
  ).toThrow("Maximum temperature reached");
  });

  it('should reset the temperature to 20', function () {
    thermostat.reset();
    expect(thermostat.currTemp).toEqual(20);
  });

  it('should advise the user they have a energy low usage', function(){
    for(var i = 1; i < 5; i++) {thermostat.decrease();}
    expect(thermostat._energyUsage).toEqual("low-usage");
  });

  it('should advise the user they have a energy medium usage', function(){
    expect(thermostat._energyUsage).toEqual("medium-usage");
  });

  it('should advise the user they have a energy high usage', function(){
    thermostat.powerSave = false;
    for(var i = 1; i < 7; i++) {thermostat.increase();}
    expect(thermostat._energyUsage).toEqual("high-usage");
  });

});
