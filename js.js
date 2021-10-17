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

$.prototype.setBgColor = function(color) {
    this.el.forEach(function(element) {
        element.style.backgroundColor = color;
    });
    return this;
}

$.prototype.setSize = function(params) {
    this.el.forEach(function(element) {
        element.style.width = params.width;
        element.style.height = params.height;
    });
    return this;
}

$.prototype.setBorderRadius = function(params) {
    this.el.forEach(function(element) {
        element.style.borderTopLeftRadius = params.topLeft;
        element.style.borderTopRightRadius = params.topRight;
        element.style.borderBottomLeftRadius = params.bottomLeft;
        element.style.borderBottomRightRadius = params.bottomRight;
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

$.prototype.delayshow = function(milliseconds) {
    var $this = this;
    setTimeout(function(){
        $this.el.forEach(function(element) {
            element.style['display'] = '';
        });
    },milliseconds);
    return this;
}

$.prototype.delayhide = function(milliseconds) {
    var $this = this;
    setTimeout(function(){
        $this.el.forEach(function(element) {
            element.style['display'] = 'none';
        });
    },milliseconds);
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

$.prototype.dblclick = function(callback) {
    this.el.forEach(function(element) {
        element.addEventListener('dblclick', callback, false);
    });
    return this;
};

$.prototype.contextmenu = function(callback) {
    this.el.forEach(function(element) {
        element.addEventListener('contextmenu', callback, false);
    });
    return this;
};

$.prototype.mousedown = function(callback) {
    this.el.forEach(function(element) {
        element.addEventListener('mousedown', callback, false);
    });
    return this;
};

$.prototype.dblrightclick = function(callback) {
    this.el.forEach(function(element) {
        element.addEventListener('mousedown', function(event){
            if (event.which==3 && event.detail == 2){
                callback(event);
            }
            event.preventDefault();
        }, false);
    });
    return this;
};

$.prototype.numberrightclick = function(number, callback) {
    this.el.forEach(function(element) {
        element.addEventListener('mousedown', function(event){
            if (event.which==3 && event.detail == number){
                callback(event);
            }
            event.preventDefault();
        }, false);
    });
    return this;
};

var $cntrightclickList = [];
$.prototype.cntrightclick = function(number, callback) {
    this.el.forEach(function(element) {
        element.addEventListener('mousedown', function(event){
            if(event.which==3){
                if($cntrightclickList.length>0){
                    if($cntrightclickList[$cntrightclickList.length-1]==event.currentTarget.id){
                        $cntrightclickList[$cntrightclickList.length] = event.currentTarget.id;
                    }else{
                        $cntrightclickList = [event.currentTarget.id];
                    }
                }else{
                    $cntrightclickList[$cntrightclickList.length] = event.currentTarget.id;
                }
            }else{
                $cntrightclickList = [];
            }
            if($cntrightclickList.length >= number){
                $cntrightclickList = [];
                callback(event);
            }
            event.preventDefault();
        }, false);
    });
    return this;
};

$.prototype.scroll = function(callback) {
    this.el.forEach(function(element) {
        element.addEventListener('wheel', callback, false);
    });
    return this;
};

$.prototype.scrollUp = function(callback) {
    this.el.forEach(function(element) {
        element.addEventListener('wheel', function(event){
            if (event.deltaY < 0){
                callback(event);
            }
        }, false);
    });
    return this;
};

$.prototype.scrollDown = function(callback) {
    this.el.forEach(function(element) {
        element.addEventListener('wheel', function(event){
            if (event.deltaY > 0){
                callback(event);
            }
        }, false);
    });
    return this;
};



$.prototype.keyup = function(callback) {
    this.el.forEach(function(element) {
        element.addEventListener('keyup', callback, false);
    });
    return this;
};

$.prototype.keydown = function(callback) {
    this.el.forEach(function(element) {
        element.addEventListener('keydown', callback, false);
    });
    return this;
};

var $keyupList = [];
$.prototype.numberkeyup = function(number, callback) {
    this.el.forEach(function(element) {
        element.addEventListener('keyup', function(event){
            if($keyupList.length>0){
                if($keyupList[$keyupList.length-1]==event.code){
                    $keyupList[$keyupList.length] = event.code;
                }else{
                    $keyupList = [event.code];
                }
            }else{
                $keyupList[$keyupList.length] = event.code;
            }
            if($keyupList.length >= number){
                $keyupList = [];
                callback(event);
            }
        }, false);
    });
    return this;
};

var $keydownList = [];
$.prototype.numberkeydown = function(number, callback) {
    this.el.forEach(function(element) {
        element.addEventListener('keydown', function(event){
            if($keydownList.length>0){
                if($keydownList[$keydownList.length-1]==event.code){
                    $keydownList[$keydownList.length] = event.code;
                }else{
                    $keydownList = [event.code];
                }
            }else{
                $keydownList[$keydownList.length] = event.code;
            }
            if($keydownList.length >= number){
                $keydownList = [];
                callback(event);
            }
        }, false);
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