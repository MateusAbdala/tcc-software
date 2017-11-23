angular.module('Projeto')

.factory('ProjetoClient',
    ['$http', '$rootScope', '$timeout', '$window',
    function ($http, $rootScope, $timeout, $window) {
        
        var urlBase = 'http://localhost:8081/api/project';
        var service = {};
        var username = $window.localStorage['userLoggedIn']

        service.GetAllProjects = function () {
            return $http.get(urlBase);
        };

        service.GetDetails = function (id) {
            return $http.get(urlBase + "/" + id);
        };

        service.NewProject = function (name, description, callback) {

            $http({
                headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
                          method: 'POST',
                          url: urlBase,
                          data: {
                            name: name,
                            description: description,
                            createdBy: username
                          }
                        }).then(function successCallback(response) {
                            callback(response);
                        }, function errorCallback(response) {

                        });
        };

        return service;
    }])
