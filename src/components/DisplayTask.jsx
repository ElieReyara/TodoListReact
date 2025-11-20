function DisplayTask({todos}) {
    return (
        <>
           <div id="incomplete-tasks" class="mb-6 bg-white p-6 rounded-lg shadow-lg">
                <h2 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">À Faire</h2>
                <div id="incomplete-tasks-block" class="">
                    {todos.map((task) => {
                        return (
                        <div class="mb-2 task-card relative divContentTask bg-gray-100 ${cardPadding} rounded-lg shadow-sm mb-3 group cursor-pointer hover:bg-gray-50 transition duration-150" data-task-id="${task.id}">
                            <div class="w-1/12 flex items-center justify-start">
                                <input type="checkbox"
                                    className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    aria-label="Marquer comme complété"
                                    data-action="complete"
                                    data-task-id="${task.id}"
                                    />
                            </div>

                            <div class="task-content w-8/12 flex flex-col justify-center cursor-pointer">
                                <span className="text-lg font-medium text-gray-800 ${task.complete ? 'line-through text-gray-500' : ''}">
                                    ${task.nom}
                                </span>
                                <span class="whitespace-nowrap text-sm text-gray-500">
                                    Échéance: ${task.echeance || 'Non définie'}
                                </span>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
            

            <div id="complete-tasks" class="bg-white p-6 rounded-lg shadow-lg">
                <h2 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Complétées</h2>
                <div id="complete-tasks-block" class="">

                </div>
            </div> 
        
        </>
    )
    
}

export default DisplayTask