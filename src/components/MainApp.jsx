import AddGroupForm from "./AddGroupForm"
import { useEffect, useState } from "react";
import DisplayGroup from "./DisplayGroup";
import DisplayTask from "./DisplayTask";

const initialGroups = [
    { id: '1', name: 'Personnel' },
    { id: '2', name: 'Code (Projet React)' },
    { id: '3', name: 'Courses' },
];

const initialTodos = [
    // Tâches du groupe 'Code (Projet React)' (id: '2')
    { 
        id: 101, 
        title: "Créer le composant GroupTabs", // Remplacé 'text' par 'title'
        description: "Implémenter la boucle de rendu pour les boutons d'onglets.", // Ajout de 'description'
        completed: false, 
        groupId: '2',
        echeance: '2025-12-05' // Ajout de 'echeance'
    },
    { 
        id: 102, 
        title: "Implémenter le rendu conditionnel de la Modale", 
        description: "Utiliser l'état isModalOpen et le rendu conditionnel (&&).", 
        completed: true, 
        groupId: '2',
        echeance: '2025-11-28' 
    },
    { 
        id: 103, 
        title: "Définir la fonction toggleComplete dans App.jsx", 
        description: "Assurer l'immuabilité en utilisant map pour basculer la propriété completed.", 
        completed: false, 
        groupId: '2',
        echeance: '2025-12-01' 
    },
    
    // Tâches du groupe 'Personnel' (id: '1')
    { 
        id: 201, 
        title: "Ranger le bureau", 
        description: "Désencombrer et organiser les câbles et les papiers.", 
        completed: false, 
        groupId: '1',
        echeance: '2025-11-25' 
    },
    { 
        id: 202, 
        title: "Appeler le fournisseur Internet", 
        description: "Négocier une nouvelle offre pour réduire la facture mensuelle.", 
        completed: true, 
        groupId: '1',
        echeance: '2025-11-20' 
    },
    
    // Tâches du groupe 'Courses' (id: '3')
    { 
        id: 301, 
        title: "Acheter du café", 
        description: "Vérifier le stock de grains de café et en acheter 1kg.", 
        completed: false, 
        groupId: '3',
        echeance: '2025-11-21' 
    },
    { 
        id: 302, 
        title: "Penser aux légumes", 
        description: "Acheter des carottes, des oignons et des poivrons pour la semaine.", 
        completed: false, 
        groupId: '3',
        echeance: '2025-11-21' 
    },
];



function MainApp() {
    // État principal des tâches
    const [todos, setTodos] = useState(initialTodos); 

    // État principal des groupes
    const [groups, setGroups] = useState(initialGroups);

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isActive, setActiveGroup] = useState();


    // Checker les taches faites ou no
    const toggleTaskCompletion = (taskId) => {
        setTodos((prevTodos) =>
            prevTodos.map(todo => { 
            if (todo.id === taskId) {
                return { ...todo, completed: !todo.completed }; // 1. OBLIGATOIRE
            }
            return todo; 
    })
        );
    }
    // Pour checker si j'affiche ou non le formulaire pour creer un groupe
    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    }

    // Tache du groupe actif
    const filteredTodos = todos.filter(todo => todo.groupId === isActive);
    

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

        <section id="task-container">
            <DisplayTask todos={filteredTodos} toggleTaskCompletion={toggleTaskCompletion}/>
        </section>
    </div>
  )
}

export default MainApp