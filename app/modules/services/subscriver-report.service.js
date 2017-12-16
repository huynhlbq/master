'use strict';

angular.module('services')

    .factory('subscriberReportService', ['$http', '$q', function($http, $q) {

        return ({
            getAllDataSubscriber : getAllDataSubscriber
        });

        function getAllDataSubscriber() {
            var deferred = $q.defer();

            $http({
                url: config.getAllDataSubscriber + 'subcriber-report-all',
                method: 'GET'
            }).then(function (payload) {
                deferred.resolve(payload.data);
            });
            return deferred.promise;
        }

    }]);