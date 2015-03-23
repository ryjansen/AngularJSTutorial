/// <reference path="..\App.ts"/>

module App {

    interface HomeScope {
        message: string;
    }

    angular.module("app").controller("homeController", ["$scope", "websiteService", ($scope: HomeScope, websiteService: WebsiteService) => {
        websiteService.listWebsites().then((response: ng.IHttpPromiseCallbackArg<any[]>) => {
            $scope.message = "Number of websites = " + response.data.length;
        });
    }]);
}