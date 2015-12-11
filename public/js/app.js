var app = angular.module('sparrowApp', []);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/home'
	}).
	otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
});