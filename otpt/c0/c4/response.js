var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 26 Nov 2017 14:12:53 GMT\x0aServer: Apache/2.4.18 (Ubuntu)\x0aLast-Modified: Wed, 13 Sep 2017 13:48:00 GMT\x0aETag: \x222fc-5591268702269-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-439/440\x0aContent-Length: 440\x0aKeep-Alive: timeout=5, max=56\x0aConnection: Keep-Alive\x0aContent-Type: text/html; charset=UTF-8\x0a\x0a\x3c!doctype html\x3e\x0a\x3chtml\x3e\x0a\x3chead\x3e\x0a\x3cmeta charset=\x22UTF-8\x22\x3e \x0a\x3cscript\x3e\x0afunction getFileFromServer(url, doneCallback) {\x0a    var xhr;\x0a\x0a    xhr = new XMLHttpRequest();\x0a    xhr.onreadystatechange = handleStateChange;\x0a    xhr.open(\x22GET\x22, url,true);\x0a    xhr.setRequestHeader(\x22Range\x22, \x22bytes=0-55\x22);\x0a    xhr.send();\x0a\x0a    function handleStateChange() {\x0a        if (xhr.status == 206) {\x0a            doneCallback(xhr.responseText);\x0a        }\x0a    }\x0a}\x0afunction load(){\x0a    getFileFromServer(\x22example.txt\x22, function(text) {\x0a    if (text === null) {\x0a        document.getElementById(\x22i\x22).innerHTML = \x22lol\x22;\x0a    }\x0a    else {\x0a        document.getElementById(\x22i\x22).innerHTML = text;\x0a    }\x0a});\x0a}\x0a\x3c/script\x3e\x0a\x3c/head\x3e\x0a\x3cbody onload=\x22load();\x22\x3e\x0a\x3cdiv id=\x22i\x22\x3e\x0a\xc4\x85\xc4\x87\xc4\x99\xc5\x82\xc5\x84\xc3\xb3\xc5\x9b\xc5\xba\xc5\xbc\x0a\x3c/div\x3e\x0a\x3c/body\x3e\x0a\x3c/html\x3e\xe5'}