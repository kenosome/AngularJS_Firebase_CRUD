var myApp = angular.module('myApp', ['firebase']);

myApp.controller('ProductsCtrl', ['$scope','$firebaseArray', function($scope,$firebaseArray) {
        var myProducts = new Firebase('https://products-2924.firebaseio.com/products');
        $scope.products = $firebaseArray(myProducts);

}]);
