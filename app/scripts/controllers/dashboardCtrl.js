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

angular.module('sampleApp1App')
  .controller('dashboardCtrl',function ($scope, $http){
   // $scope.contentCollapse = false;
   
  
    $http.get('http://10.11.0.31:8080/dash/subs/1').success( function(response) {
      $scope.students = response;
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

  });
