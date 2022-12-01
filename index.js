import {saveTasks, getTasks, onGetTask} from "./firebase.js";

const taskForm = document.getElementById('task-form');
const taskContainer = document.getElementById('tasks-container');

window.addEventListener('DOMContentLoaded', async() => {
    
    onGetTask((querySnapshot) => {
        let html = "";

        querySnapshot.forEach(doc => {
            const task = doc.data();
            html += `
                <div>
                    <h3>${task.correo}</h3>
                    <p>${task.comentario}</p>
                </div>
            `;
            
            
                
        });
    
        taskContainer.innerHTML = html
    });
});



taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    
    const correo = taskForm['task-email'];
    const comentario = taskForm['task-comentario'];


    saveTasks(correo.value, comentario.value);
    
})
