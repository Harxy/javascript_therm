describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat starts at 20 degrees', function() {
    expect(thermostat.startTemp(20)).toBe(true);
  });

});
