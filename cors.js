(function (window) {
    'use strict';

    var $ = window.jQuery,
        supportCORS = (function () {
            var xhr;
            if (window.XMLHttpRequest) {
                xhr = new window.XMLHttpRequest();
                return (xhr.hasOwnProperty && xhr.hasOwnProperty('withCredentials'));
            }
        }()),
        dataType = supportCORS ? 'json' : 'jsonp';

    $.cors = function (url, fn) {

        if (url === undefined) {
            throw new Error('$.cors: url must be defined');
        }

        var options = {
            'type': 'GET',
            'dataType': dataType
        };

        if (typeof fn === 'function') {
            options.success = fn;
        }

        if (typeof url === 'string') {
            options.url = url;

        } else if (typeof url === 'object') {
            $.extend(options, url);
        }

        $.ajax(options);

        return this;
    };

}(this));