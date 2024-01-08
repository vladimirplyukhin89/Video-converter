"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
// 1
function isResponseSuccess(response) {
    return 'databaseId' in response;
}
// 2 
function isResponseSuccess2(response) {
    return response.databaseId !== undefined;
}
// 3 
function isResponseSuccess3(response) {
    if (typeof response.databaseId !== undefined) {
        return response;
    }
    else {
        throw new Error('Ответ не успешен');
    }
}
function isCheckSuccessResponse(res) {
    return res.status === PaymentStatus.Success;
}
function isSuccessResponse(res) {
    if (isCheckSuccessResponse(res)) {
        return res.data.databaseId;
    }
    throw new Error('Response is not successful');
}
