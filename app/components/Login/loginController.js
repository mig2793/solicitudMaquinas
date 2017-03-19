escom.controller('loginController', ['$scope','$state','ModalService',
function($scope,$state,Modal) {
	$scope.login = function(){
		$state.go("menu.PrincipalUser")
	}

	$scope.register = function(){
		$state.go("registro")
	}
}]);


