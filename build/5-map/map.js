"use strict";
class MyMap {
    constructor() {
        this.keys = [];
        this.values = [];
    }
    set(key, value) {
        this.keys.push(key);
        this.values.push(value);
        return [key, value];
    }
    get(key) {
        const index = this.keys.indexOf(key);
        if (index !== -1) {
            return this.values[index];
        }
    }
    delete(key) {
        const index = this.keys.indexOf(key);
        if (index !== -1) {
            this.keys.splice(index, 1);
            this.values.splice(index, 1);
            return true;
        }
        return false;
    }
    clear() {
        this.keys = [];
        this.values = [];
    }
}
