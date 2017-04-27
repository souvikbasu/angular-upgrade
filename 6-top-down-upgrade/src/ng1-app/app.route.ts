export const Ng1Routes = ($routeProvider, $locationProvider) => {
    $routeProvider.when('/route1', {
        template: '<app-comp1 message="This is AngularJS Component 1 in Route1"><app-comp3></app-comp3><app-comp3></app-comp3></app-comp1>'
    })
        .when('/route2', {
            template: '<app-comp3 message="This is AngularJS Component 3 in Route2"></app-comp3>'
        });

    $locationProvider.html5Mode(true);
};
