escom.controller('RegistroController', ['$scope','$state','ModalService',
function($scope,$state,Modal) {

	$scope.back = function(){
		$state.go("login");
	}

}]);