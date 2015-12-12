app.controller('OfficialCtrl', ['$scope', 'OfficialService', '$http', function($scope, OfficialService, $http){
	var query = OfficialService.query();
	query.$promise.then(function(data){
		$scope.officials = data;
	});

	$scope.upVote = function(index, id, user_id){
		$http.post('http://localhost:9001/api/votes/upvote/', {id:id, user_id:user_id}).then(function(data){
			console.log(data.data);
			$scope.officials[index] = data.data;
		});
	};

	$scope.downVote = function(index, id, user_id){
		$http.post('http://localhost:9001/api/votes/downvote/', {id:id, user_id:user_id}).then(function(data){
			console.log(data);
			$scope.officials[index] = data.data;
		});
	};
}])