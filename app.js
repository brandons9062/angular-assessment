angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: './views/home.html'
    })
        .state('about', {
            url: '/about',
            templateUrl: './views/about.html'
    })
        .state('blog', {
            url: '/blog',
            templateUrl: './views/blog.html'
    })
        .state('shop', {
            url:'/shop',
            templateUrl: './views/shop.html',
            controller: 'shopCtrl'
    })
        .state('details', {
            url:'/details/:id',
            templateUrl:'./views/product-details.html',
            controller: 'productDetailsCtrl'
    })
    
    $urlRouterProvider
        .otherwise('/');
})