/// <reference path="..\App.ts"/>

module App {

    interface HomeScope {
        websites: any[];
    }

    angular.module("app").controller("homeController", ["$scope", "websiteService", ($scope: HomeScope, websiteService: WebsiteService) => {
        websiteService.listWebsites().then((response: ng.IHttpPromiseCallbackArg<any[]>) => {
            $scope.websites = response.data;
        });
    }]);
}