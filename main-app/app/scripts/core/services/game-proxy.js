(function () {
    'use strict';

    angular.module('Tombola.Games.NoughtsAndCrosses.Core')
        .service('GameProxy', ['$http', '$q', 'ProxyConstants', function($http, $q, proxyConstants){
            var me = this;
            me.apiCall = function(apiName, data){
                var defered = $q.defer();
                $http.post(proxyConstants.baseURL + apiName, data, {"withCredentials": "true"}).
                    then(function(response) {
                        defered.resolve(response.data);
                    }, function(response){
                        defered.reject(response.data);
                    });

                return defered.promise;
            };

        }]);
})();
