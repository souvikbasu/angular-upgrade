export const AppComp4 = {
    bindings: {
        message: '@'
    },
    controller: function () {
        var vm = this;

        vm.showNgVersion = function() {
            alert('I am old AngularJS !');
        };
    },
    templateUrl: 'src/ng1-app/components/app-comp4/app-comp4.tmpl.html'
};