export const AppComp4 = {
    controller: function () {
        var vm = this;

        vm.showNgVersion = function() {
            alert('I am old AngularJS !');
        };
    },
    template: '<div>Component 4</div>'
};
