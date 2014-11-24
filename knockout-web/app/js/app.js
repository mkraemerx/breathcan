'use strict';

function BCViewModel() {
	var self = this;
	self.depth = ko.observable(30);
	self.tank = ko.observable(12);
	self.appVersion = "0.0.004";

	self.ascentTime = ko.computed(function() {
		console.log("ascentTime for depth "+ self.depth());
		return 1 + Math.ceil(self.depth()/2/9) + Math.ceil(self.depth()/2/3);
	});

	self.minimumGas = ko.computed(function() {
		console.log("minimumGas for depth "+ self.depth());
		return (30 * 2 * (self.depth()/2/10 + 1) * self.ascentTime());
	});

	self.minimumGasPressure = ko.computed(function() {
		console.log("minimumGasPressure for tank "+ self.tank());
		return (self.minimumGas() / self.tank());
	});

	self.toolTipText = ko.computed(function() {
		console.log("toolTipText for depth "+ self.depth());
		return ("ascent time: "+ self.ascentTime() +" minutes /// minimum gas : "+ self.minimumGas() +" (liters at surface pressure))");
	});

}

$(document).ready(function() {
	ko.applyBindings(new BCViewModel());
});
