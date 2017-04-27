var bus = require('./bus');

require('../../css/components/notification.css');

var Notification = function() {

    var _elements = {
        scope: {
            classes: {
                default: 'notification'
            }
        }
    };

    function show(message) {
        var $notification = $('<div />').attr({class: _elements.scope.classes.default}).text(message);

        bus.emit('add.to.corner', $notification);
    }

    return {
        show: show
    };
};

module.exports = Notification;