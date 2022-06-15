// 同步和一步请求
// 在控制台输出页面源文件
var xhr = new XMLHttpRequest();
xhr.open("GET", '/bar/foo.txt', true);
// 第三个参数为true，表示请求以异步模式执行
xhr.onload = function (e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.statusText)
        }
    }
};
xhr.onerror = function (e) {
    console.error(xhr.statusText);
};
xhr.send(null);

// 创建一个标准方法来读取外部文件

function xhrSuccess() {
    this.callback.apply(this, this.arguments)
}

function xhrError() {
    console.error(this.statusText)
}

function loadFile(url, callback /*,opt_arg1,opt_arg2,...*/
) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    xhr.arguments = Array.prototype.slice.call(arguments, 2)
    xhr.onload = xhrSuccess;
    xhr.onerror = xhrSuccess;
    xhr.open("GET", url, true);
    xhr.send(null)
}
// 用法

function showMessage(message) {
    console.log(message + this.responseText)
}

loadFile("message.txt", showMessage, "New message!\n\n")


// 使用超时
// timeout属性添加于Gecko12.0(很多年前)
function loadFile(url, timeout, callback) {
    var args = Array.prototype.slice.call(arguments, 3)
    console.log(args);
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        console.error("The request for " + url + "timed out");
    }

    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback.apply(xhr, args);
            } else {
                console.error(xhr.statusText)
            }
        }
    };
    xhr.ope("GET", url, true);
    xhr.timeout = timeout;
    xhr.send()
}
function showMessage(message) {
    console.log(message + this.responseText)
}

loadFile("message.txt", 2000, showMessage, "New message!\n\n")

// 同步请求
var request = new XMLHttpRequest();
request.open('GET','http://www.mozilla.org',false);
request.send(null);
if(request.status===200){
    console.log(request.responseText)
}