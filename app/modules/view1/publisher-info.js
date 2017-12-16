'use strict';

angular.module('myApp.pubisherInfo', [])

    .controller('publisherCtrl', ['$scope', 'publisherInfoService', function ($scope, publisherInfoService) {

        $scope.viewby = 2;
        $scope.totalItems = 3;
        $scope.currentPage = 0;

        $scope.itemsPerPage = $scope.viewby;

        publisherInfoService.getAllDataPublisher()
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