var myApp = angular.module('myApp', []);

myApp.controller('ProductsCtrl', ['$scope', function($scope) {

        $scope.products = [
            {
                productName: "Leaf Rake",
                productCode: "GDN0011",
                description: "Leaf rake with 48-inch wooden handle.",
                price: "19.95"
            },
            {
                "productName": "Garden Cart",
                "productCode": "GDN0023",
                "description": "15 gallon capacity rolling garden cart",
                "price": "32.99"
            },
            {
                "productName": "Hammer",
                "productCode": "TBX0048",
                "description": "Curved claw steel hammer",
                "price": "8.99"
            },
            {
                "productName": "Saw",
                "productCode": "TBX0022",
                "description": "15-inch steel blade hand saw",
                "price": "11.55"
            }
        ];
}]);
