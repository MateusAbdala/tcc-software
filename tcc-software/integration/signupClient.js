angular.module('Authentication')

.factory('SignUpClient',
    ['$http', '$rootScope', '$timeout', '$window',
    function ($http, $rootScope, $timeout, $window) {
        var service = {};

        service.SignUp = function (username, password, name, emailaddress, callback) {
            $http({
            	headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
					method: 'POST',
					url: 'http://localhost:8082/login-service/signup',
					data: { 
					username: username, 
					password: password,
					name: name,
					emailaddress: emailaddress
					}
				}).then(function successCallback(response) {
				callback(response);
				}, function errorCallback(response) {
				
				});

        };

        return service;
    }])
