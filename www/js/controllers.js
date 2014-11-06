angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('locationCtrl', function($scope) {

        $scope.locations = [
            {City: 'Provo'},
            {City: 'Orem'},
            {City: 'Springville'},
            {City: 'American Fork'}
        ];

        return {
            all: function() {
                return locations;
            },
            get: function(City) {
                // Simple index lookup
                return locations [City];
            }
        }
});

