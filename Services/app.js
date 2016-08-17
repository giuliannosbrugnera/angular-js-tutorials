var app = angular.module('app', []);


// Service called 'messages'
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

// Controller called 'ListCtrl' that injects our messages 
// service, and exposes the list from our service to our view.
app.controller('ListCtrl', function(messages) {
	var self = this;

	self.messages = messages.list;
});

// Controller named 'PostCtrl' that also injects our messages service.
// This controller will also contain an 'addMessage' function that uses the add function we made in our service.
app.controller('PostCtrl', function(messages) {
	var self = this;

	self.addMessage = function(message) {
		messages.add(message);
	};
});