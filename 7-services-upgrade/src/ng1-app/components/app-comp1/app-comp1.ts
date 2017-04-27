export const AppComp1 = {
    bindings: {
        message: '@'
    },
    controller: function(service1, service2) {
        var vm = this;

        vm.service1Data = service1.getSomeData();
        vm.service2Data = service2.getSomeData();

        vm.showNgVersion = function() {
            alert('I am old AngularJS !');
        };
    },
    templateUrl: 'src/ng1-app/components/app-comp1/app-comp1.tmpl.html'
};

