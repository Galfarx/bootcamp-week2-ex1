(function () {
    'use strict';

    if(typeof String.prototype.repeatt === 'function'){
        return;
    }

    String.prototype.repeatt = function (count) {
        if (this == null) {
            throw new TypeError('Nie można konwetować ' + this + ' na object');
        }

        // Jawne konwersje na String i Number
        var str = '' + this;
        count = +count;
        var tmp = '';

        // NaN fallback
        if (count != count) {
            count = 0;
        }

        if (count < 0) {
            throw new RangeError('licznik repeatt musi być nieujemny');
        }

        count = Math.floor(count);

        if (str.length == 0 || count == 0) {
            return '';
        }

        for (var i = 0; i < count; i++){
            tmp += this;
        }

        return tmp;
    }
})();