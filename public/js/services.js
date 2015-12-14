app.factory('OfficialService', ['$resource', function($resource){
	return $resource('/api/officials/:id', {id:'@id'});
}])