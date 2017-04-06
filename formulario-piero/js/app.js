var app = angular.module('bonusApp', [  ]);
var app = angular.module('bonusApp', ['jcs-autoValidate']);

angular.module('bonusApp').run([
	'defaultErrorMessageResolver',
	function (defaultErrorMessageResolver) {
		//to change the root resource file path

		defaultErrorMessageResolver.setI18nFileRootPath('js/lib');
		defaultErrorMessageResolver.setCulture('es-CO');

	}
]);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

	$scope.formData = {};
	$scope.creando = true;

		$scope.guardar_datos = function(){
			
			if ($scope.creando) {

				$http.post('php/servicios/registros.crear.php', $scope.formData).success(function(data){

				if( data.err === false ){
					console.log("Èxito");
				} else {
					console.log("Problema al registrar los datos");
				};				
			
			});

			}
		}

	
}]);




