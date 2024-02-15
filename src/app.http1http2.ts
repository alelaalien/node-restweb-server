// import http from 'http';
import http2 from 'http2';
import fs from 'fs'; 

 
// const server = http.createServer((req, res) =>{

//     // res.write('hola Mundo');
//     if(req.url === '/'){

//        const file = fs.readFileSync('./public/index.html', 'utf-8');
    
//          res.writeHead(200 , { 'Content-Type' : 'text/html'}); 

//          res.end(file);

//          return;
//     }
    

    
//     if(req.url?.endsWith('.js')){

//         console.log(req.url);
//         res.writeHead(200, {'Content-Type' : 'application/javascript'});

//     }else 
//     if(req.url?.endsWith('.css')){ console.log(req.url);

//         res.writeHead(200, {'Content-Type' : 'text/css'})

//     }
     
//     const responseContent = fs.readFileSync(`./public${req.url}`, 'utf-8');

//     res.end(responseContent);
  
// })

const server = http2.createSecureServer(
    {key: fs.readFileSync('./keys/server.key'),
    cert : fs.readFileSync('./keys/server.crt') 
        
    },
    (req, res)  =>{

        if(req.url === '/'){

                   const file = fs.readFileSync('./public/index.html', 'utf-8');
                
                     res.writeHead(200 , { 'Content-Type' : 'text/html'}); 
            
                     res.end(file);
            
                     return;
                }
                

    }
);

server.listen(8000, ()=>{

    console.log('server running at 8000');
})