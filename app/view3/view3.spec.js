'use strict';

describe('myApp.view3 module', function() {
  var view3Ctrl, myScope;
  beforeEach(function() {
    module('myApp.view3');
    inject(function($controller, $rootScope) {
      myScope = $rootScope.$new();
      view3Ctrl = $controller('View3Ctrl', {
          $scope: myScope
      });
    });
  });

  describe('view3 controller', function(){

    it('should ....', function() {
      //spec body
      expect(view3Ctrl).toBeDefined();
    });

  });
});