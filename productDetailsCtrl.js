angular.module('myApp')
    .controller('productDetailsCtrl', function ($scope, shopService, $state) {

        var productId = $state.params.id;
        
        $scope.product = shopService.myProduct(productId);

    });
