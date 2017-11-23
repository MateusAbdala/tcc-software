angular.module('Projeto')

.factory('ProjetoClient',
    ['$http', '$rootScope', '$timeout', '$window',
    function ($http, $rootScope, $timeout, $window) {
        
        var urlBase = 'http://localhost:8081/api/project';
        var service = {};

        service.GetAllProjects = function () {
        	return $http.get(urlBase);
    	};

    	service.GetDetails = function (id) {
        	return $http.get(urlBase + "/" + id);
        };
        
        service.CreateNew = function (projectname, eixo, createdOn, phone, school, address, state, city, callback) {
            $http({
            	headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
					method: 'POST',
					url: 'http://localhost:8081/api/project',
					data: { 
					projectname: projectname,
					eixo: eixo,
					createdOn: createdOn,
					phone: phone,
					school: school,
					address: address,
					state: state,
					city: city
					}
				}).then(function successCallback(response) {
				callback(response);
				}, function errorCallback(response) {
				
				});

        };

        return service;
    }])
