import Errors from './errors';
import Validator from '../validator';

export default class Form {
    constructor(data, validation) {
        this.originalData = data;
        this.validation = validation;

        for(let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    data() {
        let data = {};

        for(let property in this.originalData) {
            data[property] = this[property];
        }

        return data;
    }

    reset() {
        for(let field in this.originalData) {
            this[field] = this.originalData[field];
        }
    }

    submit() {
        return new Promise((resolve, reject) => {
            let errors = Validator(this.validation).validate(this.data());

            if(Object.keys(errors).length) {
                this.onFail(errors);
                reject(errors);
            } else {
                this.onSuccess();
                resolve();
            }
        });

    }

    onSuccess() {
        this.errors.clear();
        this.reset();
    }

    onFail(errors) {
        this.errors.record(errors);
    }
}