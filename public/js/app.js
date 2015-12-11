var app = angular.module('sparrowApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home'
	});

	$locationProvider.html5Mode(true);
}]);
