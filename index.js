import server from "./src/server.js";

const main = async() => {
    try {
        await server.listen(server.get("port"));
        console.log(`Ejecutandose en el puerto: ${server.get("port")}`);
        
    } catch (error) {
        const er = "ERROR al conectarse al puerto"
        console.log(er,error);
        
    }
    

}
main();