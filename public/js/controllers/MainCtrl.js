/**
 * Created by Travis on 2/25/14.
 */
angular.module('MainController', []).controller('MainController', function ($scope) {

    $scope.examples = [ {
        name: 'Guessing Game',
        dateStart: new Date(2014, 1, 25, 21, 19, 0, 0),
        dateEnd: null,
        dateLastModified: null,
        url: '/guess'
    } ];


});