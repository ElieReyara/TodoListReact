import AddGroupForm from "./AddGroupForm"
import { useState } from "react";
import DisplayGroup from "./DisplayGroup";

const initialGroups = [
    { id: '1', name: 'Personnel' },
    { id: '2', name: 'Code (Projet React)' },
    { id: '3', name: 'Courses' },
    { id: 'all', name: 'Toutes les tâches' }, // Un groupe spécial pour afficher tout
];

const initialTodos = [
    // Tâches du groupe 'Code (Projet React)' (id: '2')
    { 
        id: 101, 
        text: "Créer le composant GroupTabs", 
        completed: false, 
        groupId: '2' 
    },
    { 
        id: 102, 
        text: "Implémenter le rendu conditionnel de la Modale", 
        completed: true, 
        groupId: '2' 
    },
    { 
        id: 103, 
        text: "Définir la fonction toggleComplete dans App.jsx", 
        completed: false, 
        groupId: '2' 
    },
    
    // Tâches du groupe 'Personnel' (id: '1')
    { 
        id: 201, 
        text: "Ranger le bureau", 
        completed: false, 
        groupId: '1' 
    },
    { 
        id: 202, 
        text: "Appeler le fournisseur Internet", 
        completed: true, 
        groupId: '1' 
    },
    
    // Tâches du groupe 'Courses' (id: '3')
    { 
        id: 301, 
        text: "Acheter du café", 
        completed: false, 
        groupId: '3' 
    },
    { 
        id: 302, 
        text: "Penser aux légumes", 
        completed: false, 
        groupId: '3' 
    },
];



function MainApp() {
    // État principal des tâches
    const [todos, setTodos] = useState(initialTodos); 
    // État principal des groupes
    const [groups, setGroups] = useState(initialGroups);

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isActive, setActiveGroup] = useState();


    // Pour checker si j'affiche ou non le formulaire pour creer un groupe
    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    }

  return (
    <div className="container mx-auto p-4 md:p-8">
        <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Your Todo</h1>
        </header>

        <nav className="flex justify-between items-center border-b border-gray-300 pb-3 mb-6">
            
            <div className="flex space-x-4" id="group-tabs">
                <DisplayGroup setActiveGroup={setActiveGroup} groups={groups} isActive={isActive}/>
            </div>

            <div className="flex space-x-4">
                <button onClick={toggleFormVisibility} id="add-group-btn" className="w-10 h-10 bg-black text-white rounded-full shadow-lg hover:bg-gray-700 transition flex items-center justify-center text-xl font-light cursor-grab">
                    <i className="fa-solid fa-plus"></i>
                    <span className="sr-only">Ajouter un groupe</span>
                </button>
                <button onClick={toggleFormVisibility} id="delete-group-btn" className="hidden w-10 h-10 bg-red-700 text-white rounded-full shadow-lg hover:text-2xl transition items-center justify-center text-xl font-light cursor-grab">
                    <i className="fa-solid fa-x"></i>
                    <span className="sr-only">Supprimer un groupe</span>
                </button>
            </div>
        </nav>
        {isFormVisible ? 
        <div onClick={toggleFormVisibility} id="dynamic-modal-group" className="modal-full-overlay ">
            <AddGroupForm toggleForm={toggleFormVisibility}/>
        </div> : null}

    </div>
  )
}

export default MainApp