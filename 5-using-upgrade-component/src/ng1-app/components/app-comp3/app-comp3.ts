export const AppComp3 = {
    bindings: {
        message: '@'
    },
    controller: function() {
        var vm = this;

        vm.showNgVersion = function() {
            alert('I am old AngularJS !');
        };
    },
    templateUrl: 'src/ng1-app/components/app-comp3/app-comp3.tmpl.html'
};
