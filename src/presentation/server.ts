import express from 'express';
import path from 'path';
 
interface IOptions {
    port: number,
    public_path?: string
}

export class Server {

    private app =  express();
    private readonly port: number;
    private readonly public_path: string;


    constructor(options : IOptions){
        const {port, public_path = 'public'} = options;
        this.port = port;
        this.public_path = public_path;

    }

    async start(){
        //*middleware 
        //*public
        this.app.use(express.static(this.public_path));

        this.app.get('*', (req, res) =>{

            res.sendFile(path.join(__dirname + `../../../${this.public_path}/index.html`));

            return;
        })
          
        this.app.listen(this.port, ()=>{
            console.log(`server at ${this.port}`);
        })
    }
}