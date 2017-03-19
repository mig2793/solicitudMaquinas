escom.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('login',{
            url:            '/login',
            templateUrl:    'app/components/Login/login.html',
            controller:     'loginController'
        }).state('registro',{
            url:            '/Registro',
            templateUrl:    'app/components/registro/registro.html',
            controller:     'RegistroController'
        }).state('menu',{
            url:            '/menu',
            templateUrl:    'app/components/menuAdmin/menuuser.html',
            controller:     'menuController'
        }).state('menu.PrincipalUser',{
            url:            '/PrincipalUser',
            templateUrl:    'app/components/principalUser/PrincipalUser.html',
            controller:     'principalUserController'
        }).state('menu.novedadesLab',{
            url:            '/novedadesLab',
            templateUrl:    'app/components/NovedadesLab/Novedades_laboratorio.html',
            controller:     'novedadesLabController'
        }).state('menu.RegistrarMaquina',{
            url:            '/RegistrarMaquina',
            templateUrl:    'app/components/RegistrMaquina/Registro_Maquinas.html',
            controller:     'RegistrarMaquinaController'
        });
        
        $urlRouterProvider.otherwise("/login");

}); 

escom.controller('menuController',['$scope','$state', function($scope,$state) {
    $state.go('login');
}]);