var app = angular.module('LoanCalculator');

app.controller('MainCtrl', function($scope, bankService) {

	$scope.getRate = function() {
		bankService.getRate().then(function(response) {
		$scope.interest_rate = response;
		});
	}

	$scope.getRate();

	$scope.calculatePayment = function(num) {
		num = Number(num)
		rate = Number($scope.interest_rate) / 100;
		A = num * rate * 4;
		$scope.monthly_payment = ((num + A)/4)
	}
})