'use strict';

// Declare app level module which depends on views, and components
var mainMod = angular.module('breathcan-web', []);

mainMod.controller('MainCtrl', ['$scope', function($scope) {
	var bc = {
		depth: 30,
		tank: 12,
		appVersion : "0.0.004"
	};
	$scope.bc = bc;

	$scope.calculate = function() {
		bc.avgEnvPressure = bc.depth/2/10 + 1;
		bc.ascentTime = 1 + Math.ceil(bc.depth/2/9) + Math.ceil(bc.depth/2/3);
		bc.minimumGas = 30 * 2 * bc.avgEnvPressure * bc.ascentTime;
		bc.minimumGasPressure = $scope.bc.minimumGas / $scope.bc.tank
	}

	$scope.$watch('bc.tank', $scope.calculate);
	$scope.$watch('bc.depth', $scope.calculate);

}]);
