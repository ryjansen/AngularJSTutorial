/// <reference path="..\App.ts"/>

module App {

    export class WebsiteService {
        private _$http: ng.IHttpService;

        constructor($http: ng.IHttpService) {
            this._$http = $http;
        }

        public listWebsites(): ng.IHttpPromise<any[]> {
            return this._$http.get("/Home/ListWebsites");
        }
    }

    angular.module("app").service("websiteService", ["$http", WebsiteService]);
}