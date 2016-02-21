/**
 * Created by Brian Woestman on 2/19/16.
 */

var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function($scope){
    $scope.names =  [
                        {firstName: "Brian", lastName: "Woestman"},
                        {firstName: "Tyson", lastName: "Melloch"},
                        {firstName: "Derrin", lastName: "Kluth"},
                        {firstName: "Martyns", lastName: "Oyawiri"},
                        {firstName: "Frank", lastName: "Davis"},
                        {firstName: "Brooke", lastName: "Sharstrom"},
                        {firstName: "Naivi", lastName: "Schaffer"},
                        {firstName: "Paula", lastName: "Waite"}
                    ];
    console.log($scope.names);
});