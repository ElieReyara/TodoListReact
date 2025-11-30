
import { Spinner } from "./Spinner";

function DisplayTask({todos, toggleTaskCompletion, toggleEditTaskFormVisibility, setIsCurrentTask, loading}) {
    const handleCheckboxClick = (e, taskId) => {
        e.stopPropagation(); 
        toggleTaskCompletion(taskId); 
};
    // Affichage des taches base sur l'attribut completed
    return (
        <>
           <div id="incomplete-tasks" className="mb-6 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 text-left mb-4 border-b pb-2">À Faire</h2>
                {loading ? <Spinner/> : null}
                <div id="incomplete-tasks-block" >
                    {todos.map((task) => {
                        if (!task.completed) 
                            return (
                                <div onClick={ () => {setIsCurrentTask(task.id),
                                toggleEditTaskFormVisibility()}} className="mb-2 task-card relative flex justify-space  rounded-md shadow-sm  group cursor-pointer hover:bg-gray-100 transition duration-150" key={task.id}>
                                    <div  className="w-1/12 flex  justify-start">
                                        <input type="checkbox"
                                            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            aria-label="Marquer comme complété"
                                            onClick={(e) => handleCheckboxClick(e, task.id)}
                                            />
                                    </div>
    
                                    <div className="task-content w-8/12 flex flex-col items-start cursor-pointer">
                                        <span className="text-lg font-medium text-gray-800 ${task.complete ? 'line-through text-gray-500' : ''}">
                                            {task.title}
                                        </span>
                                        <span className="text-left font-medium text-gray-500 ${task.complete ? 'line-through text-gray-500' : ''}">
                                            {task.description}
                                        </span>
                                        <span className="whitespace-nowrap text-sm text-gray-500">
                                            Échéance: {task.echeance || 'Non définie'}
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            

            <div id="complete-tasks" className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-left text-gray-800 mb-4 border-b pb-2">Complétées</h2>
                {loading ? <Spinner/> : null}
                <div id="complete-tasks-block">
                    {todos.map((task) => {
                        if (task.completed) 
                            return (
                                <div onClick={() =>{setIsCurrentTask(task.id), 
                                toggleEditTaskFormVisibility()}} className="mb-2  relative flex justify-space rounded-lg shadow-sm  group cursor-pointer hover:bg-gray-100 transition duration-150" key={task.id}>
                                    <div className="w-1/12 flex  justify-start rounded">
                                        <input type="checkbox"
                                            className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                            aria-label="Marquer comme complété"
                                            onClick={(e) => handleCheckboxClick(e, task.id)}
                                            checked
                                            />
                                    </div>
    
                                    <div className="task-content w-8/12 flex flex-col items-start justify-center cursor-pointer">
                                        <span className="text-lg font-medium text-gray-800 ${task.complete ? 'line-through text-gray-500' : ''}">
                                            {task.title}
                                        </span>
                                        <span className="font-medium text-gray-500 text-left {task.complete ? 'line-through text-gray-500' : ''}">
                                            {task.description}
                                        </span>
                                        <span className="whitespace-nowrap text-sm rounded border-amber-500 text-gray-500">
                                            Échéance: {task.echeance || 'Non définie'}
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div> 
        
        </>
    )
    
}

export default DisplayTask