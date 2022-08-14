const inputAdd = document.getElementById('inputAdd');
const buttonAdd = document.getElementById('buttonAdd');
buttonAdd.addEventListener('click',crearElemento);


const tareas = []

tareas.push('Hola','Chau');

tareas.forEach(el => {
    const tarea = document.getElementById('elementoUno');
    tarea.innerHTML=`${tareas[0]}`
});

function crearElemento(){
    console.log(inputAdd.value);
}