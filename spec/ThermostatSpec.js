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

  describe('minimum temperature', function(){
    it('is 10 degrees', function(){
      expect(thermostat.minimumTemperature()).toEqual(10);
    })
  });

  describe('warmer', function(){
    describe('PSM on', function(){
      it('increases the temperature if < 25', function(){
        thermostat.warmer();
        expect(thermostat.temperature).toEqual(21)
      })

      it('does nothing the temperature if >= 25', function(){
        thermostat.temperature = 25
        thermostat.warmer();
        expect(thermostat.temperature).toEqual(25)
      })
    })

    describe('PSM off', function(){
      it('increases the temperature if < 32', function(){
        thermostat.powerSavingMode = false;
        thermostat.warmer();
        expect(thermostat.temperature).toEqual(21)
      })

      it('does nothing the temperature if >= 32', function(){
        thermostat.powerSavingMode = false;
        thermostat.temperature = 32
        thermostat.warmer();
        expect(thermostat.temperature).toEqual(32)
      })
    })
  })

})


