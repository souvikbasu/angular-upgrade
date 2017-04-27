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
