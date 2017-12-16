'use strict';

angular.module('services')

    .factory('publisherInfoService', ['$http', '$q', function($http, $q) {

        return ({
            getAllDataPublisher : getAllDataPublisher
        });

        function getAllDataPublisher() {
            var deferred = $q.defer();

            $http({
                url: config.getAllDataPublisher + 'find-all-publisher',
                method: 'GET'
            }).then(function (payload) {
                deferred.resolve(payload.data);
            });
            return deferred.promise;
        }

    }]);