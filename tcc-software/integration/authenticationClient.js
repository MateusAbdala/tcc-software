angular.module('Authentication')

.factory('AuthenticationClient',
    ['$http', '$rootScope', '$timeout', '$window',
        function ($http, $rootScope, $timeout, $window) {
            var service = {};
            service.Login = function (username, password, callback) {

            $http({
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
                },
                method: 'POST',
                url: 'http://localhost:8082/login-service/authenticate',
                data: { 
                    username: username, 
                    password: password 
                }
            }).then(function successCallback(response) {
                callback(response);
            }, function errorCallback(response) {

            });

        };

        service.SetCredentials = function (username, token, usertype, emailaddress) {
		  $window.localStorage['userLoggedIn'] = username;
          $window.localStorage['jwtToken'] = token;
          $window.localStorage['usertype'] = usertype;
          $window.localStorage['emailaddress'] = emailaddress;
        };

        service.ClearCredentials = function () {
          $window.localStorage.clear();
        };

        return service;
    }])
