/// <reference path="..\App.ts"/>

module App {

    interface HomeScope {
        message: string;
    }

    angular.module("app").controller("homeController", ["$scope", "$http", ($scope: HomeScope, $http: ng.IHttpService) => {
        $http.get("/Home/ListWebsites").then((response: ng.IHttpPromiseCallbackArg<any[]>) => {
            $scope.message = "Number of websites = " + response.data.length;
        });
    }]);
}