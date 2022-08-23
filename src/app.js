class Tarea{
    constructor(tarea,id) {
        this.tarea = tarea;
        this.id = id;        
    }
}

const inputAdd = document.getElementById('inputAdd');
const buttonAdd = document.getElementById('buttonAdd');
buttonAdd.addEventListener('click',()=>{crearTarea()});

const contenedorTareas = document.getElementById('contenedorTareas');
const tareas = [];
localStorage.setItem('tareasUsuario',JSON.stringify(tareas));
let contadorID = 0;

const crearTarea = () => {
    let tarea = inputAdd.value;
    let tareaID = contadorID;    
    if(inputAdd.value!==''){    
        contadorID++;    
        let tareaObjeto=new Tarea(tarea,tareaID);
        tareas.push(tareaObjeto);
        localStorage.setItem('tareasUsuario',JSON.stringify(tareas));        
        actualizarTareas();
        inputAdd.value='';
    } else {
        const alertError = document.getElementById('alertError');
        alertError.classList.remove('hidden')
        setTimeout(function(){
            alertError.classList.add('hidden');
        }, 10000);
        inputAdd.focus();
    }
}

const eliminarTarea = () => {
    let tareasLocal = JSON.parse(localStorage.getItem('tareasUsuario'));
    tareasLocal
    let btnEliminarTarea = document.getElementById(`eliminarBtn${3}`);

    actualizarTareas();
};

const actualizarTareas = () => {
    const fragmentTarea = document.createDocumentFragment();
    let tareaARealizar = document.createElement("p");
    tareaARealizar.innerHTML = `<div class="bg-white my-2 p-1 rounded-xl flex items-center justify-between">
                                    <p class="ml-2 mr-1">${tareas[tareas.length-1].tarea}</p>
                                    <button class="btn btn-xs btn-circle btn-outline mr-2" id="eliminarBtn${contadorID}">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>`;
    fragmentTarea.appendChild(tareaARealizar);
    //contenedorTareas.append(tareaARealizar);
    contenedorTareas.appendChild(fragmentTarea);
    contenedorTareas.classList.add('px-2','py-1','shadow-lg');
}
