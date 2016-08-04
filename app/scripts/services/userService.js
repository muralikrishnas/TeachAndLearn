'use strict';

angular.module('sampleApp1App')
.factory('UserService', ['$http', '$q', function($http, $q){
 
    return {
         
            fetchAllUsers: function(chapter,id) {
                    return $http.get('http://192.168.1.30:8080/dashboard/' + chapter + id)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while fetching users');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
             
            createUser: function(data){
                    return $http.post('http://192.168.1.30:8080/dashboard/seva/' , data)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while creating user');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
             
            updateUser: function(data){
                    return $http.put('http://192.168.1.30:8080/dashboard/ins/' , data)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while updating user');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
             
            deleteUser: function(id){
                    return $http.delete('http://192.168.1.30:8080/dashboard/delAudio/'+id)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while deleting user');
                                        return $q.reject(errResponse);
                                    }
                            );
            }
         
    };
 
}]);