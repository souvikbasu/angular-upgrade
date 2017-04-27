angular
    .module('ng1')
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider.when('/route1', {
                template: '<app-comp1 message="This is AngularJS Component 1 in Route1"></app-comp1>'
            })
                .when('/route2', {
                    template: '<app-comp3 message="This is AngularJS Component 3 in Route2"></app-comp3>'
                })
                .otherwise({
                    redirectTo: '/route1'
                });

            $locationProvider.html5Mode(true);
        }]);

(function() {
    'use strict';

    angular
        .module('ng1')
        .service('service1', ['$q', service1]);

    function service1($q) {
        this.getSomeData = function() {
            var def = $q.defer();
            def.resolve("This data is from AngularJS Service 1");
            return def.promise;
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('ng1')
        .controller('Ng1Comp1Ctrl', ['service1', Ng1Comp1Ctrl])
        .component('appComp1', {
            bindings: {
                message: '@'
            },
            controller: 'Ng1Comp1Ctrl',
            templateUrl: './app/components/app-comp1/app-comp1.tmpl.html'
        });

    function Ng1Comp1Ctrl(service1) {
        var vm = this;

        vm.serviceData = '';
        service1.getSomeData()
            .then(function(data) {
               vm.serviceData = data;
            });

        vm.showNgVersion = function() {
            alert('I am old AngularJS !');
        };
    }
})();

(function () {
    'use strict';

    angular
        .module('ng1')
        .controller('Ng1Comp2Ctrl', Ng1Comp2Ctrl)
        .component('appComp2', {
            bindings: {
                message: '@'
            },
            controller: 'Ng1Comp2Ctrl',
            templateUrl: './app/components/app-comp2/app-comp2.tmpl.html'
        });

    function Ng1Comp2Ctrl() {
        var vm = this;

        vm.showNgVersion = function() {
            alert('I am old AngularJS !');
        };
    }
})();

(function () {
    'use strict';

    angular
        .module('ng1')
        .controller('Ng1Comp3Ctrl', Ng1Comp3Ctrl)
        .component('appComp3', {
            bindings: {
                message: '@'
            },
            controller: 'Ng1Comp3Ctrl',
            templateUrl: './app/components/app-comp3/app-comp3.tmpl.html'
        });

    function Ng1Comp3Ctrl() {
        var vm = this;

        vm.showNgVersion = function() {
            alert('I am old AngularJS !');
        };
    }
})();

(function () {
    'use strict';

    angular
        .module('ng1')
        .controller('Ng1Comp4Ctrl', Ng1Comp4Ctrl)
        .component('appComp4', {
            bindings: {
                message: '@'
            },
            controller: 'Ng1Comp4Ctrl',
            templateUrl: './app/components/app-comp4/app-comp4.tmpl.html'
        });

    function Ng1Comp4Ctrl() {
        var vm = this;

        vm.showNgVersion = function() {
            alert('I am old AngularJS !');
        };
    }
})();
