var $ = require('jquery');
var components = [];

require('../css/23.css');

components.corner = require('./components/corner.js');
components.form = require('./components/form.js');

$(function() {
    $('[data-component]').each(function() {
        var $this = $(this);
        var component = $this.data('component');

        if(components.hasOwnProperty(component)) {
            components[component]($this).init();
        } else {
            console.warn(component + ' component doesn\'t exist');
        }
    });
});