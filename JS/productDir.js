angular.module('assessment')
  .directive('productDir', function() {
    return {
      templateUrl: '../views/product-tmpl.html',
      restrict: 'AE',
      scope: {
        product: '='
      },
      controller: function($scope) {
        $scope.toggle = function() {
          $scope.hidden = !$scope.hidden;
        }
      }
    };
  }); //end directive
