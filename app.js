const argv= require('./config/yargs').argv;
const porHacer=require('./por-hacer/por-hacer');
const color=require('colors');

let comando= argv._[0];

switch(comando){

    case 'Crear':
        let tarea= porHacer.crear(argv.descripcion );
        console.log(tarea);
        break;


    case 'Listar':
    let listado= porHacer.getListado();
    for(let tarea of listado){
        console.log('===============Por Hacer==============='.green);
        console.log(`${tarea.descripcion}`);
        console.log(`Estado: ${tarea.completado}`);
        console.log('======================================='.green);

    }
        break;    

        // case 'actualizar':
        //     let Actualiza=porHacer.getListado(argv.descripcion,argv.completado);

        // console.log(Actualiza);
        // break;
        case 'actualizar':

                let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
                console.log(actualizado);
                break;
      case 'borrar':

                let borrar = porHacer.borrar(argv.descripcion);
                console.log(borrar);
                break;
    default:
        console.log('Comando no es reconocido');
}