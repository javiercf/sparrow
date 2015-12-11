app.controller('OfficialCtrl', ['$scope', 'OfficialService', function($scope, OfficialService){
	var query = OfficialService.query();
	query.$promise.then(function(data){
		$scope.officials = data;
	});
}])