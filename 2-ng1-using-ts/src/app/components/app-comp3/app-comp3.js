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
