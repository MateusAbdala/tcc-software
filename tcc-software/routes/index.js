angular.module('mostra')

.config(['$routeProvider', function ($routeProvider) {
    var fragmentsBase = '../fragments';
    $routeProvider
      .when('/login', {
        module: 'Authentication',
        controller: 'LoginController',
        templateUrl: fragmentsBase + '/login.html'
      })
      .when('/signup', {
        module: 'Authentication',
        controller: 'SignUpController',
        templateUrl: fragmentsBase + '/signup.html'
      })
      .when('/logout', {
        module: 'Authentication',
        controller: 'LogoutController',
        templateUrl: fragmentsBase + '/logout.html'
      })
      .when('/participe', {
        templateUrl: fragmentsBase + '/participe.html'
      })
      .when('/sobre', {
        templateUrl: fragmentsBase + '/sobre.html'
      })
      .when('/regras', {
        templateUrl: fragmentsBase + '/regras.html'
      })
      .when('/projetos', {
        module: 'Projeto',
        controller: 'ProjetoController',
        controllerAs: 'vm',
        templateUrl: fragmentsBase + '/projetos.html'
      })
      .when('/projetos/:id', {
        module: 'Projeto',
        controller: 'ProjetoController',
        controllerAs: 'vm',
        templateUrl: fragmentsBase + '/projetoSelecionado.html'
      })
      .when('/userpage', {
        templateUrl: fragmentsBase + '/userpage.html'
      })
      .when('/sejaumavaliador', {
        module: 'Authentication',
        templateUrl: fragmentsBase + '/sejaumavaliador.html'
      })
      .when('/sejaumcolaborador', {
        templateUrl: fragmentsBase + '/sejaumcolaborador.html'
      })
      .when('/avaliador', {
        templateUrl: fragmentsBase + '/avaliador.html'
      })
      .when('/administrador', {
        templateUrl: fragmentsBase + '/administrador.html'
      })
      .otherwise({
        templateUrl : fragmentsBase + '/home.html'
      })
  }]);