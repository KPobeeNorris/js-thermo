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

});
