angular.module('myApp')
    .service('shopService', function ($http) {
    var service = this;
        this.getProducts = function(){
            return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com/products/'
        })
    }
    
    service.products = [];
        
    this.productInfo = function (){
        this.getProducts()
        .then(function(response){
            service.products = response.data;
            console.log(service.products);
        })
    }
    this.productInfo();
        
        
    this.findProductById = function (id){
        return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com/products/'+id
        })
        .then(function(response){
            return response.data;
        })
    }
    this.myProduct = function (id){
        console.log(service.products.length);
        for(var i = 0; i < service.products.length; i++){
            if(service.products[i].id == id){
                return service.products[i];
            }
        }
    }
    });
