function createCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + "; path=/";
}

function delCookie(cname) {
    let expireDate = new Date(Date.now() - 1);
    expireDate = expireDate.toUTCString();
    document.cookie = cname + "=; expires=" + expireDate + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        c = c.replace(/^\s+|\s+$/g, "");
        console.log(c);
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}