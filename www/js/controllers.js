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

    .controller('saleOrder', function($scope) {
        return element.name.match() ? true : false;

    })

    .controller('submitCtrl',function($scope, $ionicPopup) {

        //Pop Up for new sale
        $scope.showSubmit = function() {
            $scope.data = {}


            var salePopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.saleInfo" ng-maxlength="25">',
                title: 'Please Enter Your Yardsale Title',
                subTitle: 'Please use Less Than 25 Characters',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if (!$scope.data.saleInfo) {
                                e.preventDefault();
                            } else {
                                return $scope.data.saleInfo;
                            }
                        }
                    }
                ]
            });
            salePopup.then(function(res) {
                console.log('Tapped!', res);
            });

        };

    });