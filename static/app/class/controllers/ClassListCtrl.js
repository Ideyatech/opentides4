'use strict';

angular.module('app.class').controller('ClassListCtrl', function ($scope) {
	$scope.schedule = [{Day: "", StartTime: "", EndTime: ""}];
	
	$scope.addSchedule = function() {
		var date = {};
		date.Day = "";
		date.StartTime = "";
		date.EndTime = "";
		$scope.schedule.push(date); 
	}
	
	$scope.removeSchedule = function($index){ 
	  $scope.schedule.splice($index,1);     
	}
});