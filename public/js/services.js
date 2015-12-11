app.factory('OfficialService', ['$resource', function($resource){
	return $resource('http://localhost:9001/api/officials/:id', {id:'@id'});
}])