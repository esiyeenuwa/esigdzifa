'use strict';


describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should define view1ctrl', inject(function($controller) {
      //spec body
	  var mockScope={};
      var view1Ctrl = $controller('View1Ctrl',{$scope:mockScope},{});
      expect(view1Ctrl).toBeDefined();
    }));

  });
});

  
  describe('view1 controller', function(){
  beforeEach(module('myApp.view1'));

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });

  

 
  describe('view1 controller', function(){

   beforeEach(module('myApp.view1'));
  
    it('should generate an akan name for a female and with 2014-09-09', inject(function($controller) {
      //spec body
	  var myscope = {
				birthdate : new Date("2014-9-9"),
				gender : "female"},
      ctrl = $controller('view1Ctrl', {$scope:myscope});

	expect(myscope.generateDay).toBeDefined();
	expect(myscope.generateDay()).toBe("Abena");
      
    }));

  });

    describe('view1 controller', function(){

   beforeEach(module('myApp.view1'));
  
    it('should generate an akan name for a male and with 2014-09-09', inject(function($controller) {
      //spec body
	  var myscope = {
				birthdate : new Date("2014-9-9"),
				gender : "male"},
      ctrl = $controller('view1Ctrl', {$scope:myscope});

	expect(myscope.generateDay).toBeDefined();
	expect(myscope.generateDay()).toBe("Kwabena");
      
    }));

  });
