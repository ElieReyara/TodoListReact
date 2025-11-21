
function EditTaskForm({toggleForm, isCurrentTask, todos}) {
    return (
        <>
            <h1>{isCurrentTask}</h1>
           {todos.map((task) => {
                if (task.id === isCurrentTask) 
                    return (
                        <form key={task.id} className="relative p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-inner" >
                            <div className="mb-4">
                                <label htmlFor="edit-task-title" className="block text-sm font-medium text-gray-700 ">Nom de la Tâche</label>
                                <input 
                                    type="text" 
                                    id="edit-task-title" 
                                    name="title" 
                                    value={task.title}
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
                                    value={task.description}
                                    className="mt-1 w-full p-3 border-0 border-b-transparent border-b-4 border-gray-300 rounded-lg outline-none  focus:border-b-4 focus:border-b-gray-300 text-gray-800 shadow-sm resize-none"
                                ></textarea>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="edit-task-due-date" className="block text-sm font-medium text-gray-700">Echeance</label>
                                <input 
                                    type="date" 
                                    id="edit-task-due-date" 
                                    value={task.echeance}
                                    name="dueDate"
                                    className="mt-1 w-full p-3 border-0 border-b-transparent border-b-4 border-gray-300 rounded-lg outline-none  focus:border-b-4 focus:border-b-gray-300 text-gray-800 shadow-sm"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button type="submit" className="bg-blue-500 text-white p-2 rounded mr-2">Modifier</button>
                                <button type="button" id="delete-task-btn" className="bg-red-500 text-white p-2 rounded">Supprimer la Tâche</button>
                            </div>
                
                        </form>
                    )
                })
            }
        </>
    )
}

export default EditTaskForm;