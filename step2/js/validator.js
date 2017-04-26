var Validator = function() {
    var _getValue = function (field) {
        return field.nodeName !== 'select' && field.value === '0' ? '' : field.value;
    };

    var _checkRequired = function (field) {
        if(field.value.length === 0) {
            field.errors.push('Field is required');
        }
    };

    var _checkMin = function (field, min) {
        if(field.value.length < min) {
            field.errors.push('Field min length is ' + min);
        }
    };

    var _checkMax = function (field, max) {
        if(field.value.length > max) {
            field.errors.push('Field max length is ' + max);
        }
    };

    var _validateField = function(data) {
        var field = {};

        field.name = data.name;
        field.value = _getValue(data);
        field.errors = [];

        for (var i = 0, atts = data.attributes, n = atts.length; i < n; i++){
            var type = atts[i].nodeName;
            var value = atts[i].value;

            if(type === 'required') {
                _checkRequired(field);
            }

            if(type === 'minlength') {
                _checkMin(field, parseInt(value));
            }

            if(type === 'maxlength') {
                _checkMax(field, parseInt(value));
            }
        }

        return field.errors;
    };

    var validate = function ($form) {
        var form = $form[0];
        var errors = {};

        for(var i = 0, qtt = form.elements.length; i < qtt; i++) {
            var fieldErrors  = _validateField(form[i]);

            if(fieldErrors.length) {
                errors[form[i].name] = fieldErrors;
            }
        }

        return errors;
    };

    return {
        validate: validate
    };
};

module.exports = Validator;