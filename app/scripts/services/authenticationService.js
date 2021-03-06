'use strict';
/*globals Global: true*/

angular.module('sampleApp1App')

.factory('AuthenticationService',
    ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $cookieStore, $rootScope, $timeout) {
        var service = {};

        service.Login = function (username, password, callback) {

            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
            // $timeout(function(){
                // var response = { success: username === 'student1' && password === 'student1' || username === 'student2' && password === 'student2' };
// 
                // if(!response.success) {
                    // response.message = 'Username or password is incorrect';
                // }
                // callback(response);
            // }, 1000);


            /* Use this for real authentication
             ----------------------------------------------*/
            // $http.post('http://10.11.0.31:8080/map/byId/1', { username: username, password: password })
               // .success(function (response) {
                   // callback(response);
               // });
//             
			//var url ="http://localhost:9040/log/all,http://192.168.1.17:9026/log/all";
			//scripts/json/addchild.json
			// $http.post('http://10.11.0.31:8080/map/byId/1',{ username: username, password: password })
               // .success(function (data) {
               	// console.log(response);	
               	// angular.forEach(data,function (value,key) {
               	// var response = {success: username ===  value.email && password === value.password};
			  		// if(!response.success) {		
			            // response.message = 'Invalid Username or passwordS';
			        // }	        
			        // callback(response);
			  // })
			  // });
//                     
              
			$http.get('http://192.168.1.30:8080/dashboard/login').success(function(data) {
			  var response = data;
			  //Global.userCredentials.USERID = data[0].userId;
			  //Global.requiredId.CLASSID = data[0];
			  angular.forEach(data,function (value,key) {
			  //console.log(response);
			  
			  var response = { success: username ===  value.email && password === value.password};
			  if(!response.success) {
			            response.message = 'Invalid Username or passwordS';
			        }
			        else{
			        	sessionStorage.setItem("classid", value.classId);
			        	Global.loginUsername.USERNAME = value.email;
			        	Global.requiredId.CLASSID = value.classId;
			        	Global.userCredentials.USERID = value.userId;
			        	callback(response);
			        	}
			  })
			});
        };

        service.SetCredentials = function (username, password) {
            var authdata = Base64.encode(username + ':' + password);

            $rootScope.globals = {
                currentUser: {
                    username: username,                   
                    authdata: authdata
                }
            };

            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
        };

        service.ClearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };

        return service;
    }])

.factory('Base64', function () {
    /* jshint ignore:start */

    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    return {
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };

    /* jshint ignore:end */
});
