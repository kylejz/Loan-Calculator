var app = angular.module('LoanCalculator');

app.service('bankService', function($http, $q) {
	this.getRate = function() {
		var dfrd = $q.defer();
		$http({
			method: 'GET',
			url: 'http://localhost:9001/interest_rate'
		}).then(function(response) {
			dfrd.resolve(JSON.parse(response.data));
			console.log(response.data)
		})

		return dfrd.promise;
	}

})