angular.module('starter.services', [])


    .factory('Friends', function() {
        var url = 'Yardsales/sales.json';


        var friends = [
            { id: 0, name: 'Scruff McGruff' },
            { id: 1, name: 'G.I. Joe' },
            { id: 2, name: 'Miss Frizzle' },
            { id: 3, name: 'Ash Ketchum' }
        ];

        return {
            all: function() {
                return friends;
            },
            get: function(friendId) {

                return friends[friendId];
            }
        }
    });