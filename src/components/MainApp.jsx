import AddGroupForm from "./AddGroupForm"
import { useState } from "react";

function MainApp() {
    const [isFormVisible, setIsFormVisible] = useState(false);


    
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
                <div data-id="1" className="relative cursor-pointer text-blue-600 font-semibold">
                    <span>Tâches</span>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t"></div>
                </div>
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
            <AddGroupForm />
        </div> : null}

    </div>
  )
}

export default MainApp