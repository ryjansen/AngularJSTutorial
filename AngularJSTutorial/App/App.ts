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
            .when("/about", {
                templateUrl: "/App/Controllers/AboutView.html",
                controller: "aboutController",
            })
            .otherwise({
                redirectTo: "/home"
            });
    }]);

    app.run(() => { });
}