export const AppComp1 = {
    bindings: {
        message: '@'
    },
    controller: function(service1) {
        var vm = this;

        vm.serviceData = '';
        service1.getSomeData()
            .then(function(data) {
                vm.serviceData = data;
            });

        vm.showNgVersion = function() {
            alert('I am old AngularJS !');
        };
    },
    templateUrl: 'src/ng1-app/components/app-comp1/app-comp1.tmpl.html'
};

