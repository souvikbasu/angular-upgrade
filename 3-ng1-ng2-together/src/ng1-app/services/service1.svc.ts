export const Service1 = function($q) {
    this.getSomeData = function() {
        var def = $q.defer();
        def.resolve("This data is from AngularJS Service 1");
        return def.promise;
    }
}