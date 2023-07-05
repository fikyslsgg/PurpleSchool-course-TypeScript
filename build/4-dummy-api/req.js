"use strict";
const axios = require('axios').default;
const url = 'https://dummyjson.com/users';
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (Gender = {}));
async function getUser(url) {
    try {
        await axios.get(url)
            .then(function (response) {
            console.log(response);
        });
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error('Axios error: ' + error.message);
        }
        else if (error instanceof Error) {
            throw new Error(error.message);
        }
        else {
            throw new Error('Something went wrong!');
        }
    }
}
