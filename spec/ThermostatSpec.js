describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('test the starting temperature', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.temp()).toEqual(20);
    });
    it('doesn\'t start at 15 degrees', function() {
      expect(thermostat.temp()).not.toEqual(15);
    });
  });
  describe('the temp up function', function(){

    it('increase the temperature by 1', function() {
      thermostat.tempUp()
      expect(thermostat.temp()).toEqual(21);
    });
  });
});
