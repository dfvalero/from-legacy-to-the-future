let Validator = function(validation) {
    let _checkRequired = function (field) {
        if(field.value.length === 0) {
            field.errors.push('Field is required');
        }
    };

    let _checkNotIn = function (field, notIn) {
        if(parseInt(field.value) === parseInt(notIn)) {
            field.errors.push('Field is required');
        }
    };

    let _checkMin = function (field, min) {
        if(field.value.length < min) {
            field.errors.push('Field min length is ' + min);
        }
    };

    let _checkMax = function (field, max) {
        if(field.value.length > max) {
            field.errors.push('Field max length is ' + max);
        }
    };

    let _validateField = function(name, value) {
        let field = {};

        field.name = name;
        field.value = value;
        field.errors = [];

        let validationField = validation[name];

        if(typeof validationField !== 'undefined') {
            let elements = validationField.split('|');

            for(let element of elements) {
                if(element === 'required') {
                    _checkRequired(field);
                }

                if(element.indexOf('not_in') >= 0) {
                    _checkNotIn(field, element.split(':')[1]);
                }

                if(element.indexOf('min') >= 0) {
                    _checkMin(field, element.split(':')[1]);
                }

                if(element.indexOf('max') >= 0) {
                    _checkMax(field, element.split(':')[1]);
                }
            }
        }

        return field.errors;
    };

    let validate = function (data) {
        let errors = {};

        for (let key in data) {
            let value = data[key];
            let fieldErrors  = _validateField(key, value);

            if(fieldErrors.length) {
                errors[key] = fieldErrors;
            }
        }

        return errors;
    };

    return {
        validate: validate
    };
};

module.exports = Validator;