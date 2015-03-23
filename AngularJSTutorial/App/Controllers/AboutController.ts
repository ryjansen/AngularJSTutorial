/// <reference path="..\App.ts"/>

module App {

    interface AboutScope {
        title: string;
        description: string;
    }

    angular.module("app").controller("aboutController", ["$scope", ($scope: AboutScope) => {
        $scope.title = "My AngularJS App";
        $scope.description = "It's awesome";
    }]);
}