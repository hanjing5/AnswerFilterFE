'use strict';

/* Controllers */

function jsonp_callback(data) {
	console.log(data);
	//$scope.answers = data;
    // returning from async callbacks is (generally) meaningless
    //$log.info(data);
    //$log.info("jsonp_callback");
}

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('AnswerCtrl', ['$scope', '$http', '$routeParams', '$log',
  	function($scope, $http, $routeParams, $log){
  		var url = 'http://localhost:3000/answers/show/' +  $routeParams.uid +'.json?callback=JSON_CALLBACK';

		$http.jsonp(url).		
			success(function(data) {
				$log.info('success');
	      		$scope.answer = data;
	      		$log.info(data);
	    	}).
	    	error(function(data,  status, headers, config){
	    		$log.info('error');
    	});

  }])
  .controller('NewCtrl', ['$scope', '$http', '$log',
  	function($scope,$http, $log) {
  		//$scope.answers = [{'1':'a'}];
  		var url = 'http://localhost:3000/answers?callback=JSON_CALLBACK';
  		//var url = "http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=jsonp_callback";

		$http.jsonp(url).
		/*
		then(function(response){
			$log.info(response);
			$log.info(response.data);
			$scope.data = response.data;
		});*/
			success(function(data) {
				$log.info('success');
	      		$scope.answers = data;
	      		//$scope.answers = [{'1':'a'}];
	      		$log.info(data);
	    	}).
	    	error(function(data,  status, headers, config){
	    		$scope.answers = data;
	    		$log.info('error');
	    		//$scope.answers = [{'1':'a'}];
	    		 $log.info(status);
	    		 $log.info(headers);
	    		 $log.info(config);
	    		 $log.info(data);
	      		//$log.log(data);
    	});
	
  }]);