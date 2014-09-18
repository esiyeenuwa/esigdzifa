'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);
var d = -1;
    var n = -1;

	//This fuction generates the Akan name name and also returns the birthdate of the person
function getInput($scope){

	$scope.gender="f";
	$scope.birthdate="2014-09-09";
	
	$scope.generateAkanName= function(){ console.log("generateAkan name called and birthday value is: ",$scope.birthdate); return $scope.birthdate};
		
	
	$scope.generateDay= function(){
	
		//this idea was gotten from w3schools
		d = new Date($scope.birthdate);
		if($scope.gender=="f"){
			var weekdayF = new Array(7);
		    weekdayF[0] = "Esi";
		    weekdayF[1] = "Adwoa";
		    weekdayF[2] = "Abena";
		    weekdayF[3] = "Akua";
		    weekdayF[4] = "Yaa";
		    weekdayF[5] = "Efua";
		    weekdayF[6] = "Ama";

		    n = weekdayF[d.getDay()];
			$scope.numDay=n;
			
			return $scope.numDay
		}
		
			else if($scope.gender=="m"){
			var weekdayM = new Array(7);
		    weekdayM[0] = "Kwesi";
		    weekdayM[1] = "Kwadwo";
		    weekdayM[2] = "Kwabena";
		    weekdayM[3] = "Kwaku";
		    weekdayM[4] = "Yaw";
		    weekdayM[5] = "Kofi";
		    weekdayM[6] = "Kwame";

		    n = weekdayM[d.getDay()];
			$scope.numDay=n;
			
			return $scope.numDay
		}

	}
}