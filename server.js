const  fs  = require('fs');
const http = require('http');

const server =http.createServer((req,res)=>{
    console.log(req.url, req.method);

    res.setHeader('Content-Type','text/plain');
fs.readFile('./views/index.html',(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    } else{
    res.write(data);
    res.end();
    }
   
})
});
server.listen(4000,'localhost',()=>{
    console.log('listening for request on prot 4000');
});