angular.module('assessment')
  .service('mainService', function($http) {

      this.getProducts = function() {
        return $http({
          method: 'GET',
          url: 'http://practiceapi.devmounta.in/products'
        }).then(function(response) {
        //  console.log(response);
          return response.data;
        });
      };



      this.getDetails = function(id) {
  			return $http.get('http://practiceapi.devmounta.in/products/' + id)
  			.then(function(response) {
  				return response.data;
  			})
  		}

  }); //end service
