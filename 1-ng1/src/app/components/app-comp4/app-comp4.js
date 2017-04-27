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
