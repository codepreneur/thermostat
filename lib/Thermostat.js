function Thermostat(){
	this.temperature = 20;
	this.powerSavingMode = true;
}

Thermostat.prototype.maximumTemperature = function() {
  if(this.powerSavingMode) {
    return 25;
  }
  return 32;
};

Thermostat.prototype.minimumTemperature = function() {
  return 10;
}

Thermostat.prototype.warmer = function() {
  if(this.temperature < this.maximumTemperature()) {
    this.temperature += 1;
  }
}