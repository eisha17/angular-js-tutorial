(function(){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

	$scope.items = "";

	$scope.message = "";

	$scope.checkItems = function(){
		var items = $scope.items;
		if(items == ""){
			$scope.message = "Please enter data first";
			return;
		}
		var arrayOfItems = items.split(',');
		if (arrayOfItems.length > 3){
			$scope.message = "Too much!";
		}else{
			$scope.message = "Enjoy!";
		}
	}
}
})();