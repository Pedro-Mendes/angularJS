'use strict';

describe('myApp.view3 module', function() {
  var myScope;
  beforeEach(function() {
    module('myApp.view3');
    inject(function($controller, $rootScope) {
      myScope = $rootScope.$new();
      $controller('View3Ctrl', {
        $scope: myScope
      });
    });
  });

  describe('view3 controller', function() {
    it('Testing sum function', function() {
      myScope.updateValue();
      expect(myScope.calculation).toBe("1 + 1 = 2");
    });

  });
});