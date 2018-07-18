
        
        var app=angular.module('myapp',['ngRoute']);
		app.config(['$routeProvider',
  				function($routeProvider) {
    				$routeProvider.
      					when('/ngclick', {
        						templateUrl: 'ANGULARJSEXAMPLES/ng_click_eg.html'
      						}).
      					when('/ngshow', {
        						templateUrl: 'ANGULARJSEXAMPLES/ng_show_eg.html'
      						}).
					when('/filters', {
        						templateUrl: 'ANGULARJSEXAMPLES/filters_eg.html'
      					});
  			}]);
	