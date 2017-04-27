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
