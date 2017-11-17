angular.module('mostra')

.directive('barranavegacao', function() {
  return {
    restrict: 'E',
    templateUrl: './fragments/barranavegacao.html',
    controller: function() {
      this.page = 1;

      this.isSet = function(checkPage) {
        return this.page === checkPage;
      };

      this.setPage = function(activePage) {
        this.page = activePage;
      };
    },
    controllerAs: "page"
  };
})

.directive('rodape', function(){
  return {
    restrict: 'E',
    templateUrl: './fragments/rodape.html'
  };
})

.directive('dropuser', function(){
  return {
    restrict: 'E',
    templateUrl: './fragments/dropuser.html'
  };
})

.directive('pesquisaprojeto', function(){
  return {
    restrict: 'E',
    templateUrl: './fragments/pesquisaprojeto.html'
  };
})

//computer directive
.directive('computer', function() {
  return {
    restrict: 'E',
    templateUrl: './fragments/computer.html',
    controller: function($scope) {
      $scope.today = new Date();      
    },
    controllerAs: "pcControl"
  };
})

//Example file upload - START
.directive("ngFileSelect", function(fileReader, $timeout) {
    return {
      scope: {
        ngModel: '='
      },
      link: function($scope, el) {
        function getFile(file) {
          fileReader.readAsDataUrl(file, $scope)
            .then(function(result) {
              $timeout(function() {
                $scope.ngModel = result;
              });
            });
        }

        el.bind("change", function(e) {
          var file = (e.srcElement || e.target).files[0];
          getFile(file);
        });
      }
    };
 })
 //Example file upload - END

.directive('pager', function(){
  return {
    restrict: 'E',
    templateUrl: './components/pager/pager.html'
  };
}); 
