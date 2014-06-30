describe("Thermostat",function(){
	var thermostat;

	beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("is intially at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20)
  })

  it("has PSM on by default", function(){
    expect(thermostat.powerSavingMode).toBe(true);
  })

  describe('maximum temperature', function(){
    it('is 25 degrees with PSM on', function(){
      expect(thermostat.maximumTemperature()).toEqual(25);
    })

    it('is 32 degrees with PSM off', function(){
      thermostat.powerSavingMode = false;
      expect(thermostat.maximumTemperature()).toEqual(32);
    })
  })

})


