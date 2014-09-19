'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});


  describe('view1 controller', function(){

    it('should generate an akan name for a female and with 2014-09-09', inject(function($controller) {
      //spec body
	  var scope = {},
      ctrl = $controller('view1Ctrl', {$scope:scope});

	expect(scope.generateDay()).toEqual("Abena");
      
    }));

  });

