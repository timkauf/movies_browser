// Bootstrap popovers for description, which stopped working at some point.
// So I went back to fixed description view area

// $(document).ready(function(){
// 	//Set up the description popover
// 	$('[data-toggle="popover"]').popover({
// 		// Contain the popover within the body NOT the element it was called in, so the width is not constrained
// 	    container: 'body',
// 	    placement: 'top'
// 	});
// });


//AngularJS starting here

angular.module('movies', []).controller('moviesCtrl', MoviesCtrl);

function MoviesCtrl($scope, $http) {       

	$scope.description = 'Click a title to see description';
	$scope.searchTerm = '';

	$scope.getDataFromService = getDataFromService;
	$scope.showDescription = showDescription;
	$scope.clearDescription = clearDescription;


	getDataFromService($http);

	function getDataFromService($http) {
		//Get JSON data from web service
		$http({
			method: 'GET',
			url: 'http://private-05248-rottentomatoes.apiary-mock.com/'
		}).then(function successCallback(response) {
			$scope.movies = response.data.movies;

			console.log('Data from service received.');
			assertEqual($scope.movies[0].movie_name, "Avengers - Age of Ultron");
		}, function errorCallback(response) {
			//Load data from local file as fallback
			$scope.movies = movies;

			console.log('Data service failed; showing local data.');
		});
	}

	function showDescription(index) {
		descripFrag = "Surprise hit Pitch Perfect";
		assertEqual($scope.movies[3].description.substring(0, 26).trim(), descripFrag);

		$scope.movie_name = $scope.movies[index].movie_name;
		$scope.description = $scope.movies[index].description;
	}

	function clearDescription() {
		$scope.description = 'Click a title to see description';
	}

	function assertEqual(varParam, compParam) {
		if(varParam == compParam) {
			console.log("PASS: " + varParam + " - expected data received.");
		} else {
			console.log("FAIL: " + varParam + " - expected data not found.");
		}
	}
} 
