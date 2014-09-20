'use strict';

var EsiApp=angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

EsiApp.controller('View1Ctrl', [function($scope) {

}]);
var d = -1;
    var n = -1;
	
	var mygender="0";
	var mybirthdate="0";
	var name="no name yet";
 


	//This fuction generates the Akan name name and also returns the birthdate of the person
function getInput($scope){

	$scope.gender="f";
	$scope.birthdate="2015-01-01";
	$scope.name=name;
	$scope.generateAkanName= function(){ console.log("generateAkan name called and birthday value is: ",$scope.birthdate); return $scope.name};
		
	
		$scope.generateDay= function(){
	
		//this idea was gotten from w3schools
		d = new Date($scope.birthdate);
		if(mygender=="female"){
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
		
			else if(mygender=="male"){
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



  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : 649478788484037,
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  
  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
		mygender=response.gender;
		mybirthdate=response.birthday;
		name=response.name;
    });
  }
