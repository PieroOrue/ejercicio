app.controller('registrosCtrl', ['$scope','$routeParams','$http', function($scope,$routeParams,$http){
	
	//var codigo = $routeParams.codigo;
	$scope.usuario = {};
	$scope.creando = true;

		$scope.guardarRegistros = function(){
			//console.log("Mensaje..");
			if ($scope.creando) {

				$http.post('php/servicios/registro.crear.php', $scope.usuario).success(function(data){

				if( data.err === false ){

				//$scope.actualizado = true;

			};
				
			
			});

			}
		}

	}
]);