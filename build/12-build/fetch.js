"use strict";
class RequestBuilder {
    constructor() {
        this.method = 'GET';
        this.body = {};
        this.headers = {};
        this.url = '';
    }
    setMethod(method) {
        this.method = method;
        return this;
    }
    ;
    setBody(body) {
        this.body = body;
        return this;
    }
    ;
    setHeaders(headers) {
        this.headers = headers;
        return this;
    }
    ;
    setUrl(url) {
        this.url = url;
        return this;
    }
    ;
    async exec() {
        const res = await fetch(this.url, {
            method: this.method,
            body: JSON.stringify(this.body),
            headers: this.headers
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
        return res;
    }
    ;
}
;
