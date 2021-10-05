var $ = function(selector) {
    if (! (this instanceof $) ) {
        return new $(selector);
    }
    this.el = document.querySelectorAll(selector);
    return this;
}

$.prototype.val = function() {
    return this.el[0].value;
}

$.prototype.focus = function() {
    return this.el[0].focus();
}

$.prototype.text = function(val) {
    this.el.forEach(function(element) {
        element.innerHTML = val;
    });
    return this;
}

$.prototype.append = function(val) {
    this.el.forEach(function(element) {
        element.innerHTML += val;
    });
    return this;
}

$.prototype.css = function(prop, val) {
    this.el.forEach(function(element) {
        element.style[prop] = val;
    });
    return this;
}

$.prototype.show = function() {
    this.el.forEach(function(element) {
        element.style['display'] = '';
    });
    return this;
}

$.prototype.hide = function() {
    this.el.forEach(function(element) {
        element.style['display'] = 'none';
    });
    return this;
}

$.prototype.toggle = function() {
    this.el.forEach(function(element) {
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
    return this;
}

$.prototype.click = function(callback) {
    this.el.forEach(function(element) {
        element.addEventListener('click', callback, false);
    });
    return this;
};

$.prototype.scroll = function(callback) {
    this.el.forEach(function(element) {
        element.addEventListener('wheel', callback, false);
    });
    return this;
};

$.prototype.ready = function(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 100);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
    return this;
};

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 100);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}



function callAjax(params){
    var data = '';
    if(typeof params.data != "undefined" && Object.keys(params.data).length>0){
        var query = [];
        for (var key in params.data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(params.data[key]));
        }
        data = query.join('&');
    }
    
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            params.done(xmlhttp.responseText);
        }else{
            if(typeof params.error != "undefined"){
                params.error(xmlhttp, xmlhttp.readyState, xmlhttp.error?xmlhttp.error:'');
            }
        }
    }
    xmlhttp.open(params.method, params.url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(data);
}



function nl2br(str){
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}







//$.prototype.attr = function(prop) {
//    this.el.forEach(function(element) {
//        element.getAttribute(prop);
//    });
//    return this;
//}
//
//$.prototype.attr = function(prop, val) {
//    this.el.forEach(function(element) {
//        element.setAttribute(prop, val);
//    });
//    return this;
//}

//var ajax = {};
//ajax.x = function () {
//    if (typeof XMLHttpRequest !== 'undefined') {
//        return new XMLHttpRequest();
//    }
//    var versions = [
//        "MSXML2.XmlHttp.6.0",
//        "MSXML2.XmlHttp.5.0",
//        "MSXML2.XmlHttp.4.0",
//        "MSXML2.XmlHttp.3.0",
//        "MSXML2.XmlHttp.2.0",
//        "Microsoft.XmlHttp"
//    ];
//
//    var xhr;
//    for (var i = 0; i < versions.length; i++) {
//        try {
//            xhr = new ActiveXObject(versions[i]);
//            break;
//        } catch (e) {
//        }
//    }
//    return xhr;
//};
//
//ajax.send = function (url, callback, method, data, async) {
//    if (async === undefined) {
//        async = true;
//    }
//    var x = ajax.x();
//    x.open(method, url, async);
//    x.onreadystatechange = function () {
//        if (x.readyState == 4) {
//            callback(x.responseText)
//        }
//    };
//    if (method == 'POST') {
//        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//    }
//    x.send(data)
//};
//
//ajax.get = function (url, data, callback, async) {
//    var query = [];
//    for (var key in data) {
//        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
//    }
//    ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
//};
//
//ajax.post = function (url, data, callback, async) {
//    var query = [];
//    for (var key in data) {
//        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
//    }
//    ajax.send(url, callback, 'POST', query.join('&'), async)
//};
