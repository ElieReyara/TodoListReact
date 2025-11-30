import AddGroupForm from "./AddGroupForm"
import { use, useEffect, useState } from "react";
import { supabase } from '../supabaseClient';
import DisplayGroup from "./DisplayGroup";
import DisplayTask from "./DisplayTask";
import AddTaskForm from "./AddTaskForm";
import EditTaskForm from "./EditTaskForm";

function MainApp() {
    // État principal des tâches
    const [todos, setTodos] = useState([]); 
    const [isTaskFormVisible, setIsTaskFormVisible] = useState(false);
    const [isEditTaskFormVisible, setIsEditTaskFormVisible] = useState(false);
    const [isCurrentTask, setIsCurrentTask] = useState(0);

    // État principal des groupes
    const [groups, setGroups] = useState([]);
    const [isGroupFormVisible, setIsGroupFormVisible] = useState(false);
    const [isActive, setActiveGroup] = useState(1);

    // Quand le chargement des des donnes est en cours
    const [loading, setLoading] = useState(false);
    

    // Fonction asynchrone pour la lecture des groupes et taches depuis Supabase
    async function fetchGroups(){
        // Le client Supabase convertit ceci en requête SQL : SELECT * FROM groups;
        const {data, error} = await supabase
            .from('groups')
            .select('*');

        if (error) {
            console.log("Erreur de chargement des groupes :", error);
        } else {
            setGroups(data);// Met à jour l'état React avec les données de la DB
            setActiveGroup(data[0].id); // Définit le premier groupe comme actif par défaut
        }
    }

    async function fetchTodos(){
        setLoading(true);

        // Le client Supabase convertit ceci en requête SQL : SELECT * FROM todos;
        const {data, error} = await supabase
            .from('todos')
            .select('*');

        if (error) {
            console.log("Erreur de chargement des taches :", error);
        } else {
            setTodos(data);// Met à jour l'état React avec les données de la DB
            console.log("Taches chargées avec succès ! " + todos);
        }
        setLoading(false);
    }
    
    // Fonction pour l'ajout des groupes et tâches depuis Supabase
    async function addGroup(newGroup){
        const {data, error} = await supabase
            .from('groups')
            .insert([newGroup])
            .select(); // Retourne les lignes insérées
        
        if (error) {
            console.log("Erreur d'ajout du groupe :", error);
            return;
        } else {
            setGroups(prevGroups => [...prevGroups, data[0]]);
            console.log("Groupe ajoutée avec succès !", data);
        }
    }
    async function addTask(newTask){
        const {data, error} = await supabase
            .from('todos')
            .insert([newTask])
            .select(); // Retourne les lignes insérées
        
        if (error) {
            console.log("Erreur d'ajout de la tâche :", error);
            return;
        } else {
            setTodos(prevTodos => [...prevTodos, data[0]]);
            console.log("Tâche ajoutée avec succès !", data);
        }
    }

    // Fonction pour la MAJ des tâches depuis Supabase
    async function updateTodo(taskId, updatedFields){
        const {data, error} = await supabase
            .from('todos')
            .update(updatedFields)
            .eq('id', taskId)
            .select(); // Retourne les lignes mises à jour

        if (error) {
            console.log("Erreur de mise à jour de la tâche :", error);
            return;
        } else {
            const updatedTask = data[0];
            setTodos(prevTodos => 
                prevTodos.map(todo => 
                    // Si l'ID correspond, on remplace l'ancienne tâche par la nouvelle
                    todo.id === updatedTask.id ? updatedTask : todo
                )
            );
            console.log("Tâche mise à jour avec succès !", data);
        }
    }

    // Fonction pour la suppression des tâches depuis Supabase
    async function deleteGroup(){
        const {error} = await supabase
            .from('groups')
            .delete()
            .eq('id', isActive);

        if (error) {
            console.log("Erreur de suppression du group :", error);
            return;
        } else {
            setGroups(prevGroup => 
                prevGroup.filter(group => group.id !== isActive)
            );
            setActiveGroup(1); // Retour au groupe par défaut
            console.log("Groupe supprimée avec succès !");
        }
    }
    async function deleteTask(taskId){
        const {error} = await supabase
            .from('todos')
            .delete()
            .eq('id', taskId);

        if (error) {
            console.log("Erreur de suppression de la tâche :", error);
            return;
        } else {
            setTodos(prevTodos => 
                prevTodos.filter(todo => todo.id !== taskId)
            );
            console.log("Tâche supprimée avec succès !");
        }
    }

    useEffect(() => {
        fetchGroups();
        fetchTodos();
    }, []); 
    

    // Checker les taches faites ou no
    const toggleTaskCompletion = (taskId) => {
        setTodos((prevTodos) =>
            prevTodos.map(todo => { 
                if (todo.id === taskId) {
                    return { ...todo, completed: !todo.completed }; 
                }
                return todo; 
            })
        );
    }
    // Pour checker si j'affiche ou non le formulaire pour creer un groupe
    const toggleGroupFormVisibility = () => {
        setIsGroupFormVisible(!isGroupFormVisible);
    }

    // Pour checker si j'affiche ou non le formulaire pour creer une tache
    const toggleTaskFormVisibility = () => {
        setIsTaskFormVisible(!isTaskFormVisible);
    }

    // Pour checker si j'affiche ou non le formulaire pour creer une tache
    const toggleEditTaskFormVisibility = () => {
        setIsEditTaskFormVisible(!isEditTaskFormVisible);
    }

    const filteredTodos = todos.filter(todo => todo.groupId == isActive);

  return (
    <div className="container mx-auto p-4 md:p-8">
        <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Your Todo</h1>
        </header>

        <nav className="flex justify-between items-center border-b border-gray-300 pb-3 mb-6">
            
            <div className="flex space-x-4" id="group-tabs">
                <DisplayGroup setActiveGroup={setActiveGroup} groups={groups} isActive={isActive} />
            </div>

            <div className="flex space-x-4">
                <button onClick={toggleGroupFormVisibility} className="w-10 h-10 bg-black text-white rounded-full shadow-lg hover:bg-gray-700 transition flex items-center justify-center text-xl font-light cursor-grab">
                    <i className="fa-solid fa-plus"></i>
                    <span className="sr-only">Ajouter un groupe</span>
                </button>
                {(isActive === 1) ? 
                    null : 
                    <button onClick={deleteGroup} className="w-10 h-10 bg-red-700 text-white rounded-full shadow-lg hover:text-2xl transition items-center justify-center text-xl font-light cursor-grab">
                        <i className="fa-solid fa-x"></i>
                        <span className="sr-only">Supprimer un groupe</span>
                    </button>
        }
            </div>
        </nav>
        {isGroupFormVisible ? 
        <div onClick={toggleGroupFormVisibility} id="dynamic-modal-group" className="modal-full-overlay ">
            <AddGroupForm toggleForm={toggleGroupFormVisibility} addGroup={addGroup}/>
        </div> : null}

        {isTaskFormVisible ? 
        <div onClick={toggleTaskFormVisibility} id="dynamic-modal-group" className="modal-full-overlay ">
            <AddTaskForm toggleForm={toggleTaskFormVisibility} addTask={addTask} isActiveGroup={isActive}/>
        </div> : null}

        {isEditTaskFormVisible ? 
        <div onClick={toggleEditTaskFormVisibility} id="dynamic-modal-group" className="modal-full-overlay ">
            <EditTaskForm toggleForm={toggleEditTaskFormVisibility} isCurrentTask={isCurrentTask} todos={todos} updateTask={updateTodo} deleteTask={deleteTask} />
        </div> : null}
        

        <section id="task-container">
            <DisplayTask todos={filteredTodos} toggleTaskCompletion={toggleTaskCompletion} toggleEditTaskFormVisibility={toggleEditTaskFormVisibility} setIsCurrentTask={setIsCurrentTask}/>
        </section>
        <button onClick={toggleTaskFormVisibility} className="w-10 h-10 mt-7 bg-black text-white rounded-full shadow-lg hover:bg-gray-700 transition flex items-center justify-center text-xl font-light cursor-grab">
            <i className="fa-solid fa-plus"></i>
            <span className="sr-only">Ajouter une tache</span>
        </button>
    </div>
  )
}

export default MainApp