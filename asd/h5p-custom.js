console.log('Hello Custom File is running!!!!!!!')
var currentEmail;
var tempCurrentEmail = localStorage.getItem(
    `current_account`
);
if (tempCurrentEmail) {
    currentEmail = JSON.parse(tempCurrentEmail);
} else {
    console.log("current_account was not existed!")
}
var tempLs;
var ls = window.localStorage.getItem(`user_info_${currentEmail}`);
if (ls) {
    tempLs = JSON.parse(ls);
} else {
    console.log("user_info was not existed!")
}
var token = tempLs.access_token;
if (window.isSetupAlready === undefined) {
    console.log(token);
    window.isSetupAlready = true;
    var H5P = window.H5P = window.H5P || {};
    H5P.jQuery.ajaxSetup({
        headers: { 'Authorization': `Bearer ${token}` }
    });

    const originalFetch = window.fetch;
    console.log(originalFetch.isSetupAlready);
    window.fetch = function () {
        originalFetch.isSetupAlready = true;
        arguments[1].headers = { 'Authorization': `Bearer ${token}` };
        return originalFetch.apply(this, arguments)
    };

    const open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url, ...rest) {
        var recall = open.call(this, method, url, ...rest);
        this.setRequestHeader('Authorization', `Bearer ${token}`);
        return recall;
    };
}