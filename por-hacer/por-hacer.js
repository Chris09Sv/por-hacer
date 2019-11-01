const fs = require('fs');

let listadoPorhacer=[];

const guardarDb=()=>{
    let data=JSON.stringify(listadoPorhacer);

  fs.writeFile('db/data.json',data, (err)=>{
      if(err) throw err;
      console.log('Se guardo puto');
  });  

};

const cargarDB=()=>{
try{

    listadoPorhacer= require('../db/data.json');
 //
  // console.log(listadoPorhacer);
}catch(error){
listadoPorhacer= [];
}

};





const crear= (descripcion)=>{
    cargarDB();
    let porHacer={
        descripcion,
        completado: false
    };

    listadoPorhacer.push(porHacer);
    guardarDb();
    return porHacer;
};

const getListado=()=>{
    cargarDB();

    return listadoPorhacer;
};


const actualizar=(descripcion,completado=true)=>{
    cargarDB();

   let index = listadoPorhacer.findIndex(tarea =>  tarea.descripcion === descripcion);


if(index>=0){
    listadoPorhacer[index].completado = completado;
    guardarDb();
    return true;
}else {
    return false;
}


};

const borrar=(descripcion)=>{
    cargarDB();
 let nuevoListado= listadoPorhacer.filter(tarea=>{
     return tarea.descripcion !==descripcion
 });

 if(listadoPorhacer.length === nuevoListado.length){
     return false;
 }else{
     listadoPorhacer=nuevoListado;
     guardarDb();
     return true;
 }
}


module.exports ={
    crear,
    getListado,
    actualizar,
    borrar

}