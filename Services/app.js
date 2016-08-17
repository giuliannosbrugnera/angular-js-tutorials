var app = angular.module('app', []);

app.factory('messages', function() {
	var messages = {};

	messages.list = [];

	messages.add = function(message) {
		messages.list.push({
			id: messages.list.length,
			text: message
		});
	};

	return messages;
});