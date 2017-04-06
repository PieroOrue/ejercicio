app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'parciales/formulario.html',
			controller: 'registrosCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});