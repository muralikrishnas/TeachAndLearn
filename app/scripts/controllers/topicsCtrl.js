'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:topicsCtrl
 * @description
 * # topicsCtrl
 * Controller of the sampleApp1App
 */

angular.module('sampleApp1App')
  .controller('topicsCtrl',function ($scope,$http){
    //$scope.setBodyClass('hold-transition');
    console.log("Loaded");
    $scope.timeLimit = 10;
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
    $scope.getAll();
    // $window.onbeforeunload = function() {
    //   var hack = /irefox\/([4-9]|1\d+)/.test(navigator.userAgent);
    //   if (hack)
    //     alert( warning + '\n\n(Pardon the double dialogs ' + 'caused by Firefox bug 588292.)');
    //   return warning;}
    // };

  })
  .config(function (recorderServiceProvider) {
    recorderServiceProvider
      .forceSwf(false)
      .setSwfUrl('/lib/recorder.swf')
      .withMp3Conversion(true);
  });
