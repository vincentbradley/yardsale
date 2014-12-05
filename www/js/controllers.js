angular.module('starter.controllers', [])

    .controller('cityCtrl', function($scope) {

    })

    .controller('favoritesCtrl', function($scope) {

    })


    .controller('locationCtrl', function($scope, $http) {


        $http.get('Yardsales/sales.json')
            .success (function(data) {

            $scope.sales= data;

        }).error(function(){
                alert("error");
            });

    })


    .controller('provoCtrl', function($scope, $http) {


        $http.get('Yardsales/provo.json')
            .success(function (data) {

                $scope.provo = data;

            }).error(function () {
                alert("error");
            });

    })


    .controller('oremCtrl', function($scope, $http) {


        $http.get('Yardsales/orem.json')
            .success (function(data) {

            $scope.orem= data;

        }).error(function(){
                alert("error");
            });



    })


    .controller('americanforkCtrl', function($scope, $http) {


        $http.get('Yardsales/americanfork.json')
            .success (function(data) {

            $scope.americanfork= data;

        }).error(function(){
                alert("error");
            });



    })

