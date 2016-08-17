var app = angular.module('app', []);

app.factory('messages', function() {
	var messages = {};

	messages.list = [];

	return messages;
});