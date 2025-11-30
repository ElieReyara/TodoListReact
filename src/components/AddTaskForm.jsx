
function AddTaskForm({toggleForm, addTask, isActiveGroup}) {
    const handleInnerClick = (e) => {
        e.stopPropagation(); 
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Récupérer les valeurs du formulaire
        const formData = new FormData(e.target);
        const newTaskData = {
            title: formData.get('title'),
            description: formData.get('description'),
            echeance: formData.get('dueDate'),
            groupId: formData.get('groupId'),
        }
        if (typeof addTask === 'function') {
            addTask(newTaskData);
            console.log("Nouvelle tâche ajoutée :", newTaskData);
        }else{
            console.warn('Prop `addTask` non fournie ou n\'est pas une fonction');
        }
        toggleForm();
    }
    return (
        <>
           <div onClick={handleInnerClick} id="task-form-container" className="relative p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-inner">
                <button onClick={toggleForm} className="cursor-grab absolute right-2 top-2 text-3xl text-gray-500">
                    &times;
                </button>
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Creer un groupe</h3>

                <form method="post" onSubmit={handleSubmit}>
                    
                    <div className="mb-4">
                        <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 ">Nom de la Tâche</label>
                        <input 
                            type="text" 
                            name="title"
                            id="task-title" 
                            placeholder="Ex: Coder la logique de l'ajout en JS"
                            required 
                            className="mt-1 w-full p-3  border-0 border-b-transparent border-b-4 border-gray-300 rounded-lg outline-none  focus:border-b-4 focus:border-b-gray-300 text-gray-800 shadow-sm"
                        /> 
                    </div>
                    <div className="mb-4">
                        <label htmlFor="task-description" class="block text-sm font-medium text-gray-700">Description (Optionnel)</label>
                        <textarea
                            id="task-description"
                            name="description"
                            rows="3"
                            placeholder="Détails supplémentaires, liens, ou notes..."
                            className="mt-1 w-full p-3 border-0 border-b-transparent border-b-4 border-gray-300 rounded-lg outline-none  focus:border-b-4 focus:border-b-gray-300 text-gray-800 shadow-sm resize-none"
                        ></textarea>
                    </div>
                    <div class="mb-6">
                        <label htmlFor="task-due-date" class="block text-sm font-medium text-gray-700">Date Limite (Optionnel)</label>
                        <input 
                            type="date" 
                            name="dueDate"
                            id="task-due-date" 
                            className="cursor-pointer mt-1 w-full p-3 border-0 border-b-transparent border-b-4 border-gray-300 rounded-lg outline-none  focus:border-b-4 focus:border-b-gray-300 text-gray-800 shadow-sm"
                        />
                    </div>
                    <input type="hidden" value={isActiveGroup} name="groupId" />

                    <div class="flex justify-end">
                        <button 
                            type="submit" 
                            className="cursor-pointer px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                        >
                            Créer la Tâche
                        </button>
                    </div>
                </form>
            </div>  
        </>
    )
}

export default AddTaskForm;