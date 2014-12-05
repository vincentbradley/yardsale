// Ionic Starter App

angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {

            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {

                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {


        $stateProvider


            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/citys.html',
                        controller: 'cityCtrl'
                    }
                }
            })




            .state('tab.provo', {
                url: '/provo',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/Provo.html',

                        controller: 'provoCtrl'
                    }
                }
            })

            .state('tab.orem', {
                url: '/orem',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/Orem.html',
                        controller: 'oremCtrl'
                    }
                }
            })

            .state('tab.americanfork', {
                url: '/americanfork',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/AmericanFork.html',
                        controller: 'americanforkCtrl'
                    }
                }
            })

            .state('tab.yardsaleDetails', {
                url: '/yardsaleDetails',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/yardsaleDetails.html',
                        controller: 'yardsaledetailsCtrl'
                    }
                }
            });


        $urlRouterProvider.otherwise('/tab/dash');

    });

