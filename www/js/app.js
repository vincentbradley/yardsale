// Ionic Starter App

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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

    .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/favoriteSales.html',
          controller: 'favoritesCtrl'
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

      .state('tab.springville', {
          url: '/springville',
          views: {
              'tab-account': {
                  templateUrl: 'templates/Springville.html',
                  controller: 'spingvilleCtrl'
              }
          }
      });


  $urlRouterProvider.otherwise('/tab/dash');

});

