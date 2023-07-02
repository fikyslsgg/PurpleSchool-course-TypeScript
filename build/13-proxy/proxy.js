"use strict";
class RequestAPI {
    async getRequest(id) {
        try {
            const res = await fetch('https://dummyjson.com/products/1')
                .then((response) => response.json())
                .then((data) => console.log(data));
            return res;
        }
        catch (e) {
            console.log(e);
        }
    }
}
class RequestAccessProxy {
    constructor(api, id) {
        this.api = api;
        this.id = id;
    }
    async getRequest(id) {
        if (this.id < 10) {
            return await this.api.getRequest(id);
        }
        else {
            console.log('Ошибка получения данных');
        }
    }
}
const api = {
    getRequest: function (id) {
        throw new Error('Function not implemented.');
    }
};
const res = new RequestAccessProxy(api, 1);
