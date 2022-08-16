function creoID() { return parseInt(Math.random() * 10000) }

const inputAdd = document.getElementById('inputAdd');
const buttonAdd = document.getElementById('buttonAdd');
buttonAdd.addEventListener('click',crearElemento);

const contenedorTareas = document.getElementById('tareas');
const tareas = [];

tareas.push('Hola','Chau');

function crearElemento(){
    let tarea = inputAdd.value;
    if(inputAdd.value!==''){
        tareas.push(tarea);
        let tareaARealizar = document.createElement("p");
        //tareaARealizar.innerHTML = `${tareas[tareas.length-1]}`
        tareaARealizar.innerHTML = `<div class="bg-gray-200 my-2 p-1 rounded-xl flex items-center justify-between">
                                        <p class="ml-2 mr-1">${tareas[tareas.length-1]}</p>
                                        <button class="btn btn-xs btn-circle btn-outline mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </div>`
        contenedorTareas.append(tareaARealizar);
        contenedorTareas.classList.add('p-2');
        inputAdd.value='';
    } else {
        const alertError = document.getElementById('alertError');
        alertError.classList.remove('hidden')
        setTimeout(function(){
            alertError.classList.add('hidden');
        }, 5000);
        inputAdd.focus();
    }
}