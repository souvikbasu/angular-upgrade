export const AppComp2 = {
    bindings: {
        message: '@'
    },
    controller: function () {
        var vm = this;

        vm.showNgVersion = function () {
            alert('I am old AngularJS !');
        };
    },
    templateUrl: 'src/ng1-app/components/app-comp2/app-comp2.tmpl.html'
};
