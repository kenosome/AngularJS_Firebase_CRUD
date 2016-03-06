var myApp = angular.module('myApp', ['firebase']);

myApp.controller('ProductsCtrl', ['$scope','$firebaseArray', function($scope,$firebaseArray) {
        var myProducts = new Firebase('https://products-2924.firebaseio.com/products');
        $scope.products = $firebaseArray(myProducts);
        
        $scope.showForm= function(){
            $scope.addFormShow=true;
            $scope.editFormShow=false;
            clearForm();
        };
        
        $scope.hideForm=function () {
            $scope.addFormShow=false;
        };
        
        function clearForm(){
            $scope.productName='';
            $scope.productCode='';
            $scope.description='';
            $scope.price='';
        };
        
        $scope.addFormSubmit=function(){
            
            $scope.products.$add({
                productName:$scope.productName,
                productCode:$scope.productCode,
                description:$scope.description,
                price:$scope.price                
            });
            clearForm();
        };

}]);
