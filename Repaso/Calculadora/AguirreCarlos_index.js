const http=require('http');
const hostname='127.0.0.1';
const port=3000;

var pdf= require('phantom')

const server=http.createServer((req,res)=>{
    res.statusCode=200,
        res.setHeader('Content-Type', 'text/plain'),
        res.end('Hola Mundo');
    /*res.write(
        '<html><head></head><body><h1>Bienvenido</h1>'+'</body></html>'
    );*/
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http//${hostname}:${port}/`)
})
pdf.create().then(function (pdf){
    pdf.createPage().then(function (page){
        page.open(`${hostname}:${port}/`).then(function (status) {
            page.render('AguirreCarlos_index.pdf').then(function(){
                console.log('page render');
            });
        });
    });
});
