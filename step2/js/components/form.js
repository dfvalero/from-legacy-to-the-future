var $ = require('jquery');
var notification = require('../components/notification.js');
var Validator = require('../validator.js');

require('../../css/components/form.css');

var Form = function($scope) {

    var _elements = {
        field: {
            name: 'form-field',
            selector: '[data-form-field]'
        },
        submit: {
            name: 'form-submit',
            selector: '[data-form-submit]'
        },
        error: {
            classes: {
                default: 'form__error'
            }
        }
    };

    function _addError($field, error) {
        var $error = $('<div>').attr({class: _elements.error.classes.default}).text(error);

        $error.appendTo($field);
    }

    function _showErrors(errors) {
        _elements.field.$el.each(function() {
            var $field = $(this);
            var name = $field.find('input, select').attr('name');

            if(errors[name]) {
                _addError($field, errors[name][0]);
                _elements.submit.$el.attr('disabled', 'true');
            }
        });
    }

    function _cleanError($field) {
        $field.find('.' + _elements.error.classes.default).remove();
        _enableSubmit();
    }

    function _cleanErrors() {
        $scope.find(_elements.error.classes.default).remove();
    }

    function _enableSubmit() {
        if(!$scope.find('.' + _elements.error.classes.default).length) {
            _elements.submit.$el.removeAttr('disabled');
        }
    }

    function _doSubmit() {
        var errors = Validator().validate($scope);
        var errorsSize = Object.keys(errors).length;

        _cleanErrors();

        if(errorsSize) {
            _showErrors(errors);
        } else {
            $scope.trigger('reset');
            notification().show('Saved!');
        }

        return false;
    }

    function init() {
        _elements.field.$el = $scope.find(_elements.field.selector);
        _elements.submit.$el = $scope.find(_elements.submit.selector);

        $scope.attr('novalidate', true);

        _elements.field.$el.on('keydown change', 'input, select', function() { $(this).parents(_elements.field.selector).first().trigger('change'); });
        _elements.field.$el.on('change', function() { _cleanError($(this)); });

        $scope.on('submit', _doSubmit);
    }

    return {
        init: init
    };
};

module.exports = Form;