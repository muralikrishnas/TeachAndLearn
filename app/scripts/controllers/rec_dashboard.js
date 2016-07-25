'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:recDashboardCtrl
 * @description
 * # recDashboardCtrl
 * Controller of the sampleApp1App
 */

angular.module('sampleApp1App')
  .controller('recDashboardCtrl',function ($scope){
    $scope.contentCollapse = true;
    $scope.test_toggle = function(){
      $scope.contentCollapse = !$scope.contentCollapse;

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

  });
