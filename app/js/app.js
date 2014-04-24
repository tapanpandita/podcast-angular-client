'use strict';

/* App Module */

var podcastApp = angular.module('podcastApp', [
    'ngRoute',
    'podcastControllers'
]);

podcastApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/podcasts', {
        templateUrl: 'partials/feed-list.html',
        controller: 'PodcastListCtrl'
    }).when('/podcasts/:podcastId', {
        templateUrl: 'partials/feed-detail.html',
        controller: 'PodcastDetailCtrl'
    }).otherwise({
        redirectTo: '/podcasts'
    });
}]);
