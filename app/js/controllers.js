'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('NewCtrl', ['$scope', '$http', '$log',
  	function($scope,$http, $log) {
		$http.get('http://localhost:3000/answers/').success(function(data) {
      		$scope.answers = data;
      		$log.info(data);
    	});
  }]);