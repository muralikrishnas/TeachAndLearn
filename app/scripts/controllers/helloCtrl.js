/**
 * Created by spandanak on 6/20/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:helloCtrl
 * @description
 * # helloCtrl
 * Controller of the sampleApp1App
 */

angular.module('sampleApp1App')
.controller('helloCtrl',['$scope','$http','UserService',function ($scope, $http, UserService){
    
    var chId = Global.requiredId.CHID;
    
	UserService.fetchAllUsers(Global.RestUrls.topicUrl,1)
 	.then(function(response){
 		$scope.topicslist = response;
 		console.log(response);
 	})
 		// var url = "http://10.11.0.31:8080/dashboard/getAudio/1";
// 
    // $http.get(url).success( function(response) {
      // $scope.topicslist = response;
      // console.log(response);
    // });
    
  // .controller('helloCtrl',function ($scope, $http){
     // var url = "http://10.11.0.31:8080/dashboard/getAudio/1";
// 
    // $http.get(url).success( function(response) {
      // $scope.topicslist = response;
      // console.log(response);
    // });
// 
  }]);
