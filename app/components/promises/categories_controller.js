'use strict';


angular.module('ddah.promises', [])
var ddahAPP = angular.module('ddah',['ddah.promises']);

ddahAPP.controller('DDAHCategoriesController', ['$scope', function($scope) {
  if(typeof $scope.data === 'undefined'){
  	$scope.categories = []
  }
  else {
  	$scope.categories = ddahTransformer($scope.data)
  }
}]);