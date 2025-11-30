
function EditTaskForm({toggleForm, isCurrentTask, todos, updateTask, deleteTask}) {
    const handleInnerClick = (e) => {
        e.stopPropagation(); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Récupérer les valeurs du formulaire
        const formData = new FormData(e.target);
        const updatedTaskData = {
            title: formData.get('title'),
            description: formData.get('description'),
            echeance: formData.get('dueDate'),
        };
        console.log("Tâche mise à jour (MODIFIER) :", updatedTaskData);
        // `updateTask` est une prop (fonction) ; ici on vérifie qu'elle existe
        if (typeof updateTask === 'function') {
            updateTask(isCurrentTask, updatedTaskData);
        } else {
            console.warn('Prop `updateTask` non fournie ou n\'est pas une fonction');
        }
        toggleForm();
    };

    const handleDelete = () => {
        // Vérifier et appeler la fonction de suppression si elle existe
        if (typeof deleteTask === 'function') {
            deleteTask(isCurrentTask);
            console.log("Action SUPPRIMER pour la tâche ID:", isCurrentTask);
        } else {
            console.warn('Prop `deleteTask` non fournie ou n\'est pas une fonction');
        }
        toggleForm();
    };

    return (
        <>
           <div onClick={handleInnerClick} id="task-form-container" className="relative p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-inner">
                <button onClick={toggleForm} className="cursor-grab absolute right-2 top-2 text-3xl text-gray-500">
                    &times;
                </button>
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Creer une tache</h3>
                {todos.map((task) => {
                        if (task.id === isCurrentTask) 
                            return (
                                <form key={task.id} onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="edit-task-title" className="block text-sm font-medium text-gray-700 ">Nom de la Tâche</label>
                                        <input 
                                            type="text" 
                                            id="edit-task-title" 
                                            name="title" 
                                            defaultValue={task.title}
                                            required 
                                            className="mt-1 w-full p-3  border-0 border-b-transparent border-b-4 border-gray-300 rounded-lg outline-none  focus:border-b-4 focus:border-b-gray-300 text-gray-800 shadow-sm"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="edit-task-description" className="block text-sm font-medium text-gray-700">Description</label>
                                        <textarea
                                            id="edit-task-description"
                                            name="description"
                                            rows="3"
                                            defaultValue={task.description}
                                            className="mt-1 w-full p-3 border-0 border-b-transparent border-b-4 border-gray-300 rounded-lg outline-none  focus:border-b-4 focus:border-b-gray-300 text-gray-800 shadow-sm resize-none"
                                        ></textarea>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="edit-task-due-date" className="block text-sm font-medium text-gray-700">Echeance</label>
                                        <input 
                                            type="date" 
                                            id="edit-task-due-date" 
                                            defaultValue={task.echeance}
                                            name="dueDate"
                                            className="mt-1 w-full p-3 border-0 border-b-transparent border-b-4 border-gray-300 rounded-lg outline-none  focus:border-b-4 focus:border-b-gray-300 text-gray-800 shadow-sm"
                                        />
                                    </div>

                                    <div className="flex justify-end">
                                        <button type="submit" className="bg-blue-500 text-white p-2 rounded mr-2 cursor-pointer">Modifier</button>
                                        <button type="button" onClick={handleDelete} id="delete-task-btn" className="bg-red-500 text-white p-2 rounded cursor-pointer">Supprimer la Tâche</button>
                                    </div>
                        
                                </form>
                            )
                        })
                    }
            </div>
        </>
    )
}

export default EditTaskForm;