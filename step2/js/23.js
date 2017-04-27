var $ = require('jquery');
var Validator = require('./validator');

require('../css/23.css');
require('./components/corner.js');
require('./components/form.js');
require('./components/notification.js');

var $form = $('#form');
var $submit = $form.find('[type="submit"]');
var $corner = $('.corner');
var $notification = $('<div />').attr({class: 'notification'});
var time = 2000;

var showErrors = function($form, errors) {
    var form = $form[0];

    for(var i = 0, qtt = form.elements.length; i < qtt; i++) {
        if(errors[form[i].name]) {
            var error = errors[form[i].name][0];

            var $error = $('<div>').attr({class: 'form__error'}).text(error);

            $error.appendTo($(form[i]).parents('.form__field').first());
            $submit.attr('disabled', 'true');
        }
    }
};

var cleanErrors = function($form) {
    $form.find('.form__error').remove();
};

var enableSubmit = function() {
    if(!$form.find('.form__error').length) {
        $submit.removeAttr('disabled');
    }
};

var showNotification = function(message) {
    var $clone = $notification.clone();

    $clone.text(message);
    $clone.appendTo($corner);

    setInterval(function() {
        $clone.remove();
    }, time);
};

$(document).ready( function() {
    $form.attr('novalidate', true);

    $form.on('keydown change', 'input, select', function() {
        $(this).parents('.field').first().find('.error').remove();
        enableSubmit();
    });

    $form.on('submit', function() {
        var errors = new Validator().validate($form);
        var errorsSize = Object.keys(errors).length;

        cleanErrors($form);

        if(errorsSize) {
            showErrors($form, errors);
        } else {
            $form.trigger('reset');
            showNotification('Saved!');
        }

        return false;
    });
});