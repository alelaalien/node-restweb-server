import { Server } from "./presentation/server";
import { envs } from "./config/envs";

(async()=>{
    main();
})();

async function main(){
  
    const server = new Server({
        port: envs.PORT,
        public_path : envs.PUBLIC_PATH
    });
console.log('njkj');
    server.start();
}