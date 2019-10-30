import { addNewTask, updateTask } from './server';

(async function myFunc() {
    await addNewTask({
        name: 'my new task 1',
        id: "12347"
    });
   
    await updateTask({
        id: "12347",
        name: 'my task 1 updated'
    });

})()

