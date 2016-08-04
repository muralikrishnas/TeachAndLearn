'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:topicsCtrl
 * @description
 * # topicsCtrl
 * Controller of the sampleApp1App
 */
/*globals Global: true*/

angular.module('sampleApp1App')
  .controller('topicsCtrl',['$scope','$http','UserService',function ($scope, $http, UserService){
    
    var chId = Global.requiredId.CHID;
    
	UserService.fetchAllUsers(Global.RestUrls.topicUrl,chId)
 	.then(function(response){
 		$scope.topicslist = response;
 		console.log(response);
 	});
 	
 	$scope.refresh = function(){
    UserService.fetchAllUsers(Global.RestUrls.topicUrl,chId)
          .then(function(response){
 		$scope.topicslist = response;
 		console.log(response);
 	});
}

 	 
    $scope.deleteAudio = function(id){
   	//alert(id);
   	if (confirm("Are you sure?")) {
        UserService.deleteUser(id);
        $scope.refresh();
    }
    return false;
   };
   
  	console.log("Loaded");
    $scope.timeLimit = 10;
    //var elapsedTime = $scope.elapsedTime;
    
	$scope.insertAudio = function(){
   	var data = {chapterId: chId, source: Global.loginUsername.USERNAME, topicName: $scope.topicname, reference:$scope.reference, comments:$scope.comments};
   	//var data = {topicName: $scope.topicname}
   	//var data = $scope.topicname;
   	console.log(data);
   	UserService.updateUser(data);
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
    // $scope.getAll = function(){
    //   var url="http://10.11.0.31:8080/audio/all";
    //   $http.get(url).(function(response){
    //     $scope.recordings=response.data[0];
    //     console.log(recordings);
    //   });
    // };
    //$scope.getAll();
    // $window.onbeforeunload = function() {
    //   var hack = /irefox\/([4-9]|1\d+)/.test(navigator.userAgent);
    //   if (hack)
    //     alert( warning + '\n\n(Pardon the double dialogs ' + 'caused by Firefox bug 588292.)');
    //   return warning;}
    // };

  }])
  .config(function (recorderServiceProvider) {
    recorderServiceProvider
      .forceSwf(false)
      .setSwfUrl('/lib/recorder.swf')
      .withMp3Conversion(true);
  });
