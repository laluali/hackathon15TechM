//Define an angular module for our app
var myApp = angular.module('myApp',['ngRoute']);

myApp.controller('myAppCtrl', function($scope) {

	$scope.message = 'This is Show demo screen';
});