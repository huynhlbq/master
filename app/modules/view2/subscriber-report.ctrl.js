'use strict';

angular.module('myApp.subscriberReport', [])

    .controller('subscriberReportCtrl', ['$scope', 'subscriberReportService', function ($scope, subscriberReportService) {

        $scope.viewby = 2;
        $scope.totalItems = 3;
        $scope.currentPage = 0;

        $scope.itemsPerPage = $scope.viewby;

        subscriberReportService.getAllDataSubscriber()
            .then(function (payload) {
                $scope.data = payload;
                $scope.totalItems = $scope.data.length;
                $scope.currentPage = 1;
            });


        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function () {
            console.log('Page changed to: ' + $scope.currentPage);
        };

        $scope.setItemsPerPage = function (num) {
            $scope.itemsPerPage = num;
            $scope.currentPage = 1; //reset to first page
        }
    }]);