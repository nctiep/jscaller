var $ = function(selector) {
    if (! (this instanceof $) ) {
        return new $(selector);
    }
    if(selector=='this'){
        this.el = document.currentTarget;
    }else{
        this.el = document.querySelectorAll(selector);
    }
    
    return this;
}

$.prototype.val = function() {
    return this.el[0].value;
}

$.prototype.getAttr = function(attr) {
    return this.el[0].getAttribute(attr);
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

$.prototype.setText = function(val) {
    this.el.forEach(function(element) {
        element.innerHTML = val;
    });
    return this;
}

$.prototype.getText = function() {
    return this.el[0].innerHTML;
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

$.prototype.setSize = function(params1, params2) {
    if(params2==null){
        this.el.forEach(function(element) {
            element.style.width = params1.width;
            element.style.height = params1.height;
        });
    }else{
        this.el.forEach(function(element) {
            element.style.width = params1;
            element.style.height = params2;
        });
    }
    return this;
}

$.prototype.setWidthHeight = function(width, height) {
    this.el.forEach(function(element) {
        element.style.width = width;
        element.style.height = height;
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

$.prototype.delayshow = function(miliseconds) {
    var $this = this;
    setTimeout(function(){
        $this.el.forEach(function(element) {
            element.style['display'] = '';
        });
    },miliseconds);
    return this;
}

$.prototype.delayhide = function(miliseconds) {
    var $this = this;
    setTimeout(function(){
        $this.el.forEach(function(element) {
            element.style['display'] = 'none';
        });
    },miliseconds);
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



var keyPass = [];
$.prototype.multikeypress = function(keyList, callback) {
    this.el.forEach(function(element) {
        element.addEventListener('keydown', function(event){
            if (event.currentTarget !== event.target) return;
            
            var faultAll = 0;
            for(var i=0; i<keyList.length; i++){
                keyPass[i] = typeof keyPass[i] != "undefined" ? keyPass[i] : 0;
                if(event.keyCode==getKeyCodeByKeyName(keyList[i].toLowerCase())){
                    keyPass[i] = 1;
                }else{
                    faultAll++;
                }
            }
            if(faultAll>=keyList.length){
                keyPass = [];
            }
            var sum = 0;
            if(keyPass.length>0){
                sum = keyPass.reduce(function(a, b) { return a + b; }, 0);
            }
//            console.log('keyCode:', event.keyCode+" - "+getKeyNameByKeyCode(event.keyCode)+' - sum:'+sum+' - keyPass:'+keyPass);
            if(sum==keyList.length){
                callback(event);
                keyPass = [];
            }
            event.preventDefault();
        }, false);
    });
    return this;
};



var keyInOrderPass = [];
$.prototype.multikeypress_inorder = function(keyList, callback) {
    this.el.forEach(function(element) {
        element.addEventListener('keydown', function(event){
            if (event.currentTarget !== event.target) return;
            
            var sumOldKeyPass = keyInOrderPass.reduce(function(a, b) { return a + b; }, 0);
            var i=0;
            while (i<keyList.length){
                keyInOrderPass[i] = typeof keyInOrderPass[i] != "undefined" ? keyInOrderPass[i] : 0;
                if(event.keyCode==getKeyCodeByKeyName(keyList[i].toLowerCase())){
                    keyInOrderPass[i] = 1;
                    if(i>0 && keyInOrderPass[i-1]==0){
                        keyInOrderPass[i] = 0;
                    }
                }
                i++;
            }
            
            var sum = 0;
            if(keyInOrderPass.length>0){
                sum = keyInOrderPass.reduce(function(a, b) { return a + b; }, 0);
                if(sumOldKeyPass===sum){
                    keyInOrderPass = [];
                    sum = keyInOrderPass.reduce(function(a, b) { return a + b; }, 0);
                }
            }
//            console.log('keyCode:', event.keyCode+" - "+getKeyNameByKeyCode(event.keyCode)+' - sum:'+sum+' - keyInOrderPass:'+keyInOrderPass);
            if(sum==keyList.length){
                callback(event);
                keyInOrderPass = [];
            }
            event.preventDefault();
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



function getKeyCodeByKeyName(name){
    var result = '';
    try {
        result = allKeys[name];
    } catch (error) {
      console.error(error);
    }
    return result;
}
function getKeyNameByKeyCode(code){
    var result = '';
    try {
        result = getKeyByValue(allKeys, code);
    } catch (error) {
      console.error(error);
    }
    return result;
}
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
var allKeys = {
    backspace	:8,
    tab         :9,
    enter	:13,
    shift	:16,
    ctrl	:17,
    alt         :18,
    pause	:19,
    caps_lock	:20,
    escape	:27,
    page_up	:33,
    space	:32,
    page_down	:34,
    end         :35,
    home	:36,
    arrow_left	:37,
    arrow_up	:38,
    arrow_right	:39,
    arrow_down	:40,
    print_screen:44,
    insert	:45,
    delete	:46,
    0	:48,
    1	:49,
    2	:50,
    3	:51,
    4	:52,
    5	:53,
    6	:54,
    7	:55,
    8	:56,
    9	:57,
    a	:65,
    b	:66,
    c	:67,
    d	:68,
    e	:69,
    f	:70,
    g	:71,
    h	:72,
    i	:73,
    j	:74,
    k	:75,
    l	:76,
    m	:77,
    n	:78,
    o	:79,
    p	:80,
    q	:81,
    r	:82,
    s	:83,
    t	:84,
    u	:85,
    v	:86,
    w	:87,
    x	:88,
    y	:89,
    z	:90,
    select_key	:93,
    numpad_0	:96,
    numpad_1	:97,
    numpad_2	:98,
    numpad_3	:99,
    numpad_4	:100,
    numpad_5	:101,
    numpad_6	:102,
    numpad_7	:103,
    numpad_8	:104,
    numpad_9	:105,
    multiply	:106,
    add         :107,
    subtract	:109,
    decimal_point:110,
    divide	:111,
    f1	:112,
    f2	:113,
    f3	:114,
    f4	:115,
    f5	:116,
    f6	:117,
    f7	:118,
    f8	:119,
    f9	:120,
    f10	:121,
    f11	:122,
    f12	:123,
    num_lock	:144,
    scroll_lock	:145,
    semi_colon	:186,
    equal_sign	:187,
    comma	:188,
    dash	:189,
    period	:190,
    forward_slash	:191,
    open_bracket	:219,
    back_slash          :220,
    close_braket	:221,
    single_quote	:222
};



function loopRealtime(count_loop, miliseconds, callback){
    var cnt = count_loop;
    var myLoop = setInterval(function(){
        cnt--;callback();
        if(cnt<=0) clearInterval(myLoop);
    }, miliseconds);
}



var $timerList = [];
function setTimer(miliseconds, count_loop, callback, callback2){
    var isCountDown = count_loop>0?true:false;
    var cnt = count_loop;
    var myLoop = $timerList[$timerList.length] = setInterval(function(){
        if(isCountDown==true) cnt--;
        callback();
        if(isCountDown==true && cnt<=0){
            clearInterval(myLoop);
            callback2();
        }
    }, miliseconds);
    return $timerList.length-1;
}
function clearTimer(index){
    if(typeof index != "undefined"){
        clearInterval($timerList[index]);
    }else{
        $timerList.forEach(function(element) {
            clearInterval(element);
        });
    }
}
function getTimerList(){
    return $timerList;
}
function getTimerLength(){
    return $timerList.length;
}
function detroyTimerList(){
    clearTimer();
    $timerList = [];
}
function checkTimerId(id){
    if(typeof id != "undefined" && id!=''){
        return $timerList.indexOf(parseInt(id))>=0;
    }else{
        return getTimerList();
    }
}