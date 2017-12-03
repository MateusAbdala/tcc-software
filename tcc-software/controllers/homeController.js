angular.module('Home', [])

.controller('HomeController', ["$scope", "$rootScope", "$window", 
	function($scope, $rootScope, $window) {
		
		$scope.userLoggedIn = $window.localStorage['userLoggedIn'];
		$scope.usertype = $window.localStorage['usertype'];
		$scope.emailaddress = $window.localStorage['emailaddress'];

		$scope.$watch(
			function() { 
				return $window.localStorage['userLoggedIn']; 
				return $window.localStorage['usertype']; 
				return $window.localStorage['emailaddress']; 
			}, 
			function(newValue, oldValue){
				if(oldValue !== newValue){
					$scope.userLoggedIn = newValue;
				}
				if(oldValue !== newValue){
					$scope.usertype = usertype;
				}
				if(oldValue !== newValue){
					$scope.emailaddress = emailaddress;
				}
			}
		);
}]);