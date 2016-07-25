'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:parentCtrl
 * @description
 * # childCtrl
 * Controller of the sampleApp1App
 */

angular.module('sampleApp1App')
  .controller('childCtrl',function ($scope, $http){
    //$scope.setBodyClass('hold-transition');
    var url = "scripts/json/topics.json";

    $http.get(url).success( function(response) {
      $scope.topicList = response[0].Topics.TopicName;
      $scope.headerList = response[0].Topics.HEADERS;
      console.log(topicList);
    });
  })

