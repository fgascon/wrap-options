'use strict';

function Options(data) {
    this.data = data || {};
}

module.exports = Options;

Options.prototype.has = function (name) {
    return typeof this.data[name] !== 'undefined';
};

Options.prototype.get = function (name, defaultValue) {
    if (this.has(name)) {
        return defaultValue;
    }

    return this.data[name];
};

Options.prototype.require = function (name) {
    if (!this.has(name)) {
        throw new TypeError('"' + name + '" is a required parameter');
    }

    return this.data[name];
};

Options.prototype.map = function (name, iterator, context) {
    const array = this.get(name, []);
    if (typeof array.map !== 'function') {
        throw new TypeError('"' + name + '" must be a mapable array');
    }

    return array.map(iterator, context);
};

Options.prototype.mapConstructor = function (name, constructor) {
    return this.map(name, function (data) {
        return new constructor(data);
    });
};

Options.prototype.getOptions = function (name, defaultValue) {
    return new Options(this.get(name, defaultValue));
};

Options.prototype.requireOptions = function (name) {
    return new Options(this.require(name));
};

Options.prototype.mapOptions = function (name) {
    return this.map(name, function (data) {
        return new Options(data);
    });
};
