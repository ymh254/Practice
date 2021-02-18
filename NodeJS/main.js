var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

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
        <a href="/create">create</a>
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
    } else if (pathname === '/create') {
        fs.readdir('./data', function (err, files) {
            var title = 'WEB-create'
            var list = templateList(files);
            var template = templateHTML(title, list, `
            <form action="http://localhost:3000/create_process" method="post">
                <p><input type="text" name="title" placeholder="title"></p>
                <p>
                    <textarea name="description" placeholder="description"></textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
            </form>
            `);
            response.writeHead(200);
            response.end(template)
        });
    } else if (pathname === '/create_process') {
        var body = '';
        request.on('data', function (data) {
            body = body + data;
        });
        request.on('end', function () {
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
                response.writeHead(302, { Location: `/?id=${title}` });
                response.end();
            });
        });
    } else {
        response.writeHead(404);
        response.end('Not found');
    }
});
app.listen(3000);