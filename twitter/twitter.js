/**
 * Created by Brian Woestman on 2/20/16.
 */

//create app
var myApp = angular.module('myApp', []);

//create controller with injected vars
myApp.controller('mainController', ["$scope", "$filter",
    function ($scope, $filter)
{
    //create the directive var
    $scope.handle = "";

    //lowercase function
    $scope.lowerCaseHandle = function()
    {
        return $filter('lowercase')($scope.handle);
    }
}]);
