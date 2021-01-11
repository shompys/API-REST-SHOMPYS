import roleModel from '../apiServices/roles/roles.models';

export const createRoles = async () => {

    try{    
        
        const count = await roleModel.estimatedDocumentCount()
        if(count > 0) return;
        /*
            All- me permite ejecutar al mismo tiempo toda las consultas a mongo,
            devuelve un array con resultados o si fallo. 
        */
        const val = await Promise.all([
            new roleModel({name: 'admin'}).save(),
            new roleModel({name: 'twitch'}).save(),
            new roleModel({name: 'moderador'}).save(),
            new roleModel({name: 'user'}).save(),
            new roleModel({name: 'streamer'}).save()
        ])
        console.log(`Roles en entorno dev: ${val}`)
    }catch(e){
        console.log(`Error initialSetup : ${e}`)
    }

}