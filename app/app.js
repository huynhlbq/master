'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'myApp.pubisherInfo',
    'myApp.subscriberReport',
    'myApp.version',
    'services',
    'ui.bootstrap'
]).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/view1');

    $stateProvider
        .state('publisher', {
            url: '/publisher-info',
            templateUrl: 'modules/view1/publisher-info.html',
            controller: 'publisherCtrl'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('subscriber', {
            url: '/subscriber-report',
            templateUrl: 'modules/view2/subscriber-report.html',
            controller: 'subscriberReportCtrl'
        })

});
