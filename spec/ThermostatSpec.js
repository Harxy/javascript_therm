describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('starts at 20 degrees', function() {
    it('startTemp', function() {
      expect(thermostat.startTemp(20)).toBe(true);
    });
  });

  describe('starts at 20 degrees', function() {
    it('startTemp', function() {
      expect(thermostat.startTemp(19)).toBe(false);
    });
  });

  // describe('starts at 20 degrees', function() {
  //   expect(thermostat.currentTemp).toEqual(20);
  // });

});
