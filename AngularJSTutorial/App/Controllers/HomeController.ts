﻿/// <reference path="..\App.ts"/>

module App {

    interface HomeScope {
        message: string;
    }

    angular.module("app").controller("homeController", ["$scope", ($scope: HomeScope) => {
        $scope.message = "Hello world!";
    }]);
}