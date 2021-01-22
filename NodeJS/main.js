var http = require('http');
var fs = require('fs');
var url = require('url');
function templateHTML(title, list, body) {
    return `
    <!doctype html>
    <html>
    <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
    </head>
    <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        ${body}
    </body>
    </html>
    `
}

function templateList(files) {
    var list = `<ul>`
    for (var i = 0; i < files.length; i++) {
        list = list + `<li><a href="/?id=${files[i]}">${files[i]}</a></li>`
    }
    list = list + `</ul>`
    return list;
}
var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if (pathname === '/') {
        if (queryData.id === undefined) {
            fs.readdir('./data', function (err, files) {
                var title = 'Welcome'
                var description = 'Hello, NodeJS!'
                var list = templateList(files);
                var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`)
                response.writeHead(200);
                // response.end(fs.readFileSync(__dirname + url));
                response.end(template)
            })


        } else {
            fs.readdir('./data', function (err, files) {
                var list = templateList(files)
                fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
                    var title = queryData.id;
                    var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`)
                    response.writeHead(200);
                    // response.end(fs.readFileSync(__dirname + url));
                    response.end(template)
                });
            });
        }
    } else {
        response.writeHead(404);
        response.end('Not found')
    }
});
app.listen(3000);