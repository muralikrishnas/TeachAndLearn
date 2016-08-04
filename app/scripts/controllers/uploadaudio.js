'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:uploadaudioCtrl
 * @description
 * # uploadaudioCtrl
 * Controller of the sampleApp1App
 */


angular.module('sampleApp1App')

	.directive('fileModel', ['$parse', function ($parse) {
        return {
           restrict: 'A',
           link: function(scope, element, attrs) {
              element.bind('change', function(){
              $parse(attrs.fileModel).assign(scope,element[0].files)
                 scope.$apply();
              });
           }
        };
     }])
     .controller('uploadaudioCtrl', ['$scope', '$http', function($scope, $http){


       $scope.uploadFile=function(){
       var fd=new FormData();
        console.log($scope.files);
        angular.forEach($scope.files,function(file){
        fd.append('file',file);
        });
       $http.post('http://192.168.1.17:9010/Uploadaudiofiles/',fd,
                                                            {
                                                            transformRequest: angular.identity,
                                                            headers: {'Content-Type': undefined}
                                                            }).success(function(d){
                                                            console.log(d);
                                                            })


       }
     }]);
     
// angular.module('sampleApp1App')
//  
 // .directive('ngFiles', ['$parse', function ($parse) {
// 
            // function fn_link(scope, element, attrs) {
                // var onChange = $parse(attrs.ngFiles);
                // element.on('change', function (event) {
                    // onChange(scope, { $files: event.target.files });
                // });
            // };
// 
            // return {
                // link: fn_link
            // }
        // } ])
        // .controller('uploadaudioCtrl', function ($scope, $http) {
// 
            // var formdata = new FormData();
            // $scope.getTheFiles = function ($files) {
                // angular.forEach($files, function (value, key) {
                    // formdata.append(key, value);
                // });
            // };
// 
            // // NOW UPLOAD THE FILES.
            // $scope.uploadFiles = function () {
// 
                // var request = {
                    // method: 'POST',
                    // url: '',
                    // data: formdata,
                    // headers: {
                        // 'Content-Type': undefined
                    // }
                // };
// 
                // // SEND THE FILES.
                // $http(request)
                    // .success(function (d) {
                        // alert(d);
                    // })
                    // .error(function () {
                    // });
            // }
        // });
        
    // .controller('uploadaudioCtrl', ['$scope', '$http','fileUpload', function($scope, $http, fileUpload){
            // $scope.uploadFile = function(){
               // var file = $scope.myFile;
//                
               // console.log('file is ');
               // console.dir(file);
//                
               // var uploadUrl = "http://localhost:9010/Uploadaudiofiles";
               // $scope.uploadFileToUrl(file, uploadUrl);
//                
//               
            // };
             // $scope.uploadFileToUrl = function(file, uploadUrl){
               // var fd = new FormData();
               // fd.append('file', file);
               // $http.post(uploadUrl, fd, {
                  // transformRequest: angular.identity,
                  // headers: {'Content-Type': undefined}
               // })
//             
               // .success(function(){
               	// console.log(fd);
               // })
//             
               // .error(function(){
               	// console.log(fd);
               // });
            // };
//             
            // // $scope.getFile = function(){
            	// // var url ="/Uploadaudiofiles/newFile.txt"
            	// // $http.get(url).success( function(response) {
     			 // // $scope.resData = response;
      			// // console.log(response);
   			 // // });
            // // }
         // }])
//          
    // .directive('fileModel', ['$parse', function ($parse) {
            // return {
               // restrict: 'A',
               // link: function(scope, element, attrs) {
                  // var model = $parse(attrs.fileModel);
                  // var modelSetter = model.assign;
//                   
                  // element.bind('change', function(){
                     // scope.$apply(function(){
                        // modelSetter(scope, element[0].files);
                     // });
                  // });
               // }
            // };
         // }])
//          
          // .service('fileUpload', ['$http', function ($http) {
            // this.uploadFileToUrl = function(file, uploadUrl){
               // var fd = new FormData();
               // fd.append('file', file);
//             
               // $http.post('/Uploadaudiofiles', fd, {
                  // transformRequest: angular.identity,
                  // headers: {'Content-Type': undefined}
               // })
//             
               // .success(function(){
               // })
//             
               // .error(function(){
               // });
            // }
         // }]);
      
         
 
