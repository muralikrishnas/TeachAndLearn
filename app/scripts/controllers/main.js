'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleApp1App
 */
/*globals Global: true*/

angular.module('sampleApp1App')
  .controller('MainCtrl',  ['$scope', '$rootScope', '$location', '$window', 'AuthenticationService',
    function ($scope, $rootScope, $location, $window, AuthenticationService ) {
        // reset login status
       AuthenticationService.ClearCredentials();

        $scope.login = function () {
           $scope.dataLoading = false;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {

                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    Global.userCredentials.USERID = $scope.username;
                    $location.path('/dashboard');
                    $scope.dataLoading = false;
     			}
     			else {
                    $scope.error = response.message;
                    $scope.dataLoading = true;
                }
            });
        };
      $scope.register = function () {
       $scope.registerParent = true;
      };

    }])
    .config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'MainCtrl',
            templateUrl: 'views/main.html'
        })
      .when('/parent', {
        controller: 'parentCtrl',
        templateUrl: 'views/Parent_HomePage.html'
      })
        .when('/dashboard', {
            controller: 'dashboardCtrl',
            templateUrl: 'views/dashboard.html'
        })
        .when('/dashboard/1', {
            controller: 'dashboardCtrl',
            templateUrl: 'views/dashboard.html'
        })
        .when('/group', {
            controller: 'groupCtrl',
            templateUrl: 'views/AddtoStudyGroup.html'
        })
        .when('/record', {
            controller: 'recordCtrl',
            templateUrl: 'views/record.html'
        })
         .when('/child', {
            controller: 'childCtrl',
            templateUrl: 'views/Childs_Home_Page.html'
        })
      .when('/register', {
        controller: 'registerCtrl',
        templateUrl: 'views/register.html'
      })
      .when('/registerChild', {
        controller: 'registerChildCtrl',
        templateUrl: 'views/Register_Your_Children.html'
      })
      .when('/edit', {
        controller: 'editCtrl',
        templateUrl: 'views/edit.html'
      })
      .when('/chapterPage', {
        controller: 'chapterPageCtrl',
        templateUrl: 'views/chapter_page.html'
      })
      .when('/topics', {
        controller: 'topicsCtrl',
        templateUrl: 'views/Topics.html'
      })
      .when('/topics2', {
        controller: 'topicsCtrl',
        templateUrl: 'views/Topics2.html'
      })
      .when('/rec_dashboard', {
        controller: 'recDashboardCtrl',
        templateUrl: 'views/rec_dashboard.html'
      })
      .when('/uploadaudio', {
        controller: 'uploadaudioCtrl',
        templateUrl: 'views/uploadaudio.html'
      })
      .when('/hello', {
        controller: 'helloCtrl',
        templateUrl: 'views/hello.html'
      })
      
      .otherwise({ redirectTo: '/login' });

    }])

.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {

        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function () {

            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                if($rootScope.registerParent === true){
                  $location.path('/register');
                }

              $location.path('/login');
            }

        });
    }]);

