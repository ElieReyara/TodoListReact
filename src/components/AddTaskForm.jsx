
function AddTaskForm({toggleForm}) {
    const handleInnerClick = (e) => {
        e.stopPropagation(); 
    };
    return (
        <>
           <div onClick={handleInnerClick} id="task-form-container" className="relative p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-inner">
                <button onClick={toggleForm} className="cursor-grab absolute right-2 top-2 text-3xl text-gray-500">
                    &times;
                </button>
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Creer un groupe</h3>

                <form id="add-group-form" method="post" >
                    
                    <div className="mb-4">
                        <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 ">Nom de la Tâche</label>
                        <input 
                            type="text" 
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
                            rows="3"
                            placeholder="Détails supplémentaires, liens, ou notes..."
                            className="mt-1 w-full p-3 border-0 border-b-transparent border-b-4 border-gray-300 rounded-lg outline-none  focus:border-b-4 focus:border-b-gray-300 text-gray-800 shadow-sm resize-none"
                        ></textarea>
                    </div>
                    <div class="mb-6">
                        <label htmlFor="task-due-date" class="block text-sm font-medium text-gray-700">Date Limite (Optionnel)</label>
                        <input 
                            type="date" 
                            id="task-due-date" 
                            className="mt-1 w-full p-3 border-0 border-b-transparent border-b-4 border-gray-300 rounded-lg outline-none  focus:border-b-4 focus:border-b-gray-300 text-gray-800 shadow-sm"
                        />
                    </div>

                    <div class="flex justify-end">
                        <button 
                            id="submit-task"
                            type="submit" 
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
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