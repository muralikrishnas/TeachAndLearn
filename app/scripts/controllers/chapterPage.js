/**
 * Created by spandanak on 6/30/2016.
 */
/**
 * Created by spandanak on 6/30/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:chapterPageCtrl
 * @description
 * # chapterPageCtrl
 * Controller of the sampleApp1App
 */
/*globals Global: true*/
angular.module('sampleApp1App')
  .controller('chapterPageCtrl',['$scope','$http','UserService',function ($scope, $http, UserService){
   
	var subId = Global.requiredId.SUBID;
	UserService.fetchAllUsers(Global.RestUrls.chapterUrl,subId)
 	.then(function(response){
 		$scope.chapterlist = response;
 		//console.log(response);
 	});
   
    
    $scope.showTopics = function(chId){
    	//alert(chId);
    	Global.requiredId.CHID = chId;
	 	UserService.fetchAllUsers(Global.RestUrls.topicUrl,chId)
    };
   
    $scope.collapseOne = false;

    $scope.test = function(){
      $scope.collapseOne = !$scope.collapseOne;

    };

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
