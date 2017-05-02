var bus = require('./bus');

require('../../css/components/corner.css');

var Corner = function($scope) {

    var _settings = {
        delay: 2000
    };

    function _append($element) {
        $element.appendTo($scope);

        setTimeout(function() {
            $element.remove();
        }, _settings.delay);
    }

    function init() {
        bus.on('Bus', _append);
    }

    return {
        init: init
    };
};

module.exports = Corner;