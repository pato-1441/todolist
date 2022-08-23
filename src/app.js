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
let tareas = [];
localStorage.setItem('tareasUsuario',JSON.stringify(tareas));

//funciones 
let contadorID = 0;

const crearTarea = () => {
    let tarea = inputAdd.value;
    let tareaID = contadorID;    
    if(inputAdd.value!==''){    
        let tareaObjeto=new Tarea(tarea,tareaID);
        tareas.push(tareaObjeto);
        localStorage.setItem('tareasUsuario',JSON.stringify(tareas));        
        const fragmentTarea = document.createDocumentFragment();
        let tareaARealizar = document.createElement("p");
        tareaARealizar.innerHTML = `
        <div class="bg-white my-2 p-1 rounded-xl flex items-center justify-between">
            <p class="ml-2 mr-1">${tareas[tareas.length-1].tarea}</p>
            <button class="btn btn-xs btn-circle btn-outline mr-2" id="${contadorID}" onclick="eliminarTarea(this.id)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>`;
        fragmentTarea.appendChild(tareaARealizar);
        //contenedorTareas.append(tareaARealizar);
        contenedorTareas.appendChild(fragmentTarea);
        contenedorTareas.classList.add('px-2','py-1','shadow-lg');
        inputAdd.value='';
        contadorID++;
    } else {
        const alertError = document.getElementById('alertError');
        alertError.classList.remove('hidden')
        setTimeout(function(){
            alertError.classList.add('hidden');
        }, 10000);
        inputAdd.focus();
    }
}


const actualizarTareas = () => {
    contenedorTareas.innerHTML='';
    tareas.forEach(tarea => {
        const fragmentTarea = document.createDocumentFragment();
        let tareaARealizar = document.createElement("p");
        tareaARealizar.innerHTML = `
        <div class="bg-white my-2 p-1 rounded-xl flex items-center justify-between">
            <p class="ml-2 mr-1">${tarea.tarea}</p>
            <button class="btn btn-xs btn-circle btn-outline mr-2" id="${tarea.id}" onclick="eliminarTarea(this.id)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>`;
        fragmentTarea.appendChild(tareaARealizar);
        //contenedorTareas.append(tareaARealizar);
        contenedorTareas.appendChild(fragmentTarea);
        contenedorTareas.classList.add('px-2','py-1','shadow-lg');
    });
    if(tareas.length===0){
        //contenedorTareas.remove();
    }

}

function eliminarTarea(id){
    // filtro y copio todos los ID *excepto* el que le estoy pasando
    tareas = tareas.filter(tarea => tarea.id !== (parseInt(id)));
    localStorage.setItem('tareasUsuario',JSON.stringify(tareas));
    actualizarTareas();
};