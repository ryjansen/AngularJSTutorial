module App {
    var app = angular.module("app", [
        "ngRoute"
    ]);

    app.config(["$routeProvider", ($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider
            .when("/home", {
                templateUrl: "/App/Controllers/HomeView.html",
                controller: "homeController",
            })
            .otherwise({
                redirectTo: "/home"
            });
    }]);

    app.run(() => { });
}