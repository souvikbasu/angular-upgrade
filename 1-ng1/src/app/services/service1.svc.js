(function() {
    'use strict';

    angular
        .module('ng1')
        .service('service1', ['$q', service1]);

    function service1($q) {
        this.getSomeData = function() {
            var def = $q.defer();
            def.resolve("This data is from AngularJS Service 1");
            return def.promise;
        }
    }
})();