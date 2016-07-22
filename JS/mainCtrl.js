angular.module('assessment')
  .controller('mainCtrl', function($scope, $stateParams, $http, mainService) {


    $scope.getProducts = function() {
      mainService.getProducts().then(function(response) {
        console.log(response);
        $scope.products = response;
      });
    };

    $scope.getProducts();

    //console.log($scope.products);

  }); //end controller
