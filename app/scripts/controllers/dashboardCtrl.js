/**
 * Created by spandanak on 6/30/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:dashboardCtrl
 * @description
 * # dashboardCtrl
 * Controller of the sampleApp1App
 */
/*globals Global: true*/

angular.module('sampleApp1App')
  .controller('dashboardCtrl',['$scope','$http','UserService',function ($scope, $http, UserService){
   UserService.fetchAllUsers(Global.RestUrls.subjectUrl,1)
  	
  	.then(function(response){
     $scope.students = response;
     //console.log(response);
    });
    
   
     $scope.go = function(id){
     	 Global.requiredId.SUBID = id;
	 	UserService.fetchAllUsers(Global.RestUrls.chapterUrl,id);
	
	 };
	 
    $http.get('/scripts/json/recentvideos.json').success( function(response) {
      $scope.recenttopics = response;
      console.log(response);
    });
    
    $scope.collapseOne = false;

    $scope.test = function(){
      $scope.collapseOne = !$scope.collapseOne;

    };

    // $scope.test_toggle = function(){
    //   $scope.contentCollapse = !$scope.contentCollapse;
    // };
    $scope.toggle_visibility = function () {
      $scope.RecentlyListenedsub = !$scope.RecentlyListenedsub ;
    };
    $scope.toggle_latest = function(){
      $scope.MyLatestRecordingssub = !$scope.MyLatestRecordingssub ;
    };
    $scope.toggle_shared = function(){
      $scope.RecentlySharedWithMesub = !$scope.RecentlySharedWithMesub ;
    };

  }]);
  
