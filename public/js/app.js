var app = angular.module('sparrowApp', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home',
		controller: 'OfficialCtrl'
	});

	$locationProvider.html5Mode(true);
}]);
