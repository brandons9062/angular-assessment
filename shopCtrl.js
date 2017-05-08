angular.module('myApp')
    .controller('shopCtrl', function ($scope, shopService, $state) {

    
    $scope.getProducts = function (){
        shopService.getProducts()
        .then(function(response){
            $scope.products = response.data;
            console.log($scope.products);
        })
    }
    $scope.getProducts();

    $scope.goToProduct = function (id){
            $state.go("details", {id:id});
            shopService.findProductById(id);
        }
    
    });
