angular.module('Home', [])

.controller('HomeController', ["$scope", "$rootScope", "$window", 
	function($scope, $rootScope, $window) {
		
		$scope.userLoggedIn = $window.localStorage['userLoggedIn'];
		$scope.usertype = $window.localStorage['usertype'];
		$scope.emailaddress = $window.localStorage['emailaddress'];

		$scope.$watch(
			function() { 
				return $window.localStorage['userLoggedIn']; 
			}, 
			function(newValue, oldValue){
				if(oldValue !== newValue){
					$scope.userLoggedIn = newValue;
				}
			}
		);
		$scope.$watch(
			function() { 
				return $window.localStorage['usertype']; 
			}, 
			function(newValue, oldValue){
				if(oldValue !== newValue){
					$scope.usertype = newValue;
				}
			}
		);
		$scope.$watch(
			function() { 
				return $window.localStorage['emailaddress']; 
			}, 
			function(newValue, oldValue){
				if(oldValue !== newValue){
					$scope.emailaddress = newValue;
				}
			}
		);
}]);