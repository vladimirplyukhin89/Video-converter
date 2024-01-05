"use strict";
function logId(id) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    }
    else {
        console.log(id.toString().toLowerCase());
    }
}
