
function AddGroupForm({toggleForm}) {
    const handleInnerClick = (e) => {
        e.stopPropagation(); 
    };
    return (
        <>
            <div onClick={handleInnerClick} id="task-form-container" className="relative p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-inner">
                {/* Remplacement de onclick par onClick */}
                <button onClick={toggleForm}  className="cursor-grab absolute right-2 top-2 text-3xl text-gray-500">
                    &times;
                </button>
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Creer un groupe</h3>

                <form id="add-group-form" method="post" >
                    
                    <div className="mb-4">
                        {/* Remplacement de for par htmlFor */}
                        <label htmlFor="group-title" className="block text-sm font-medium text-gray-700 ">Nom du groupe</label>
                        <input 
                            type="text" 
                            id="group-title" 
                            name="title" 
                            placeholder="Ex: Coder la logique de l'ajout en JS"
                            required 
                            className="mt-1 w-full p-3 border-0 border-b-transparent border-b-4 border-gray-300 rounded-lg outline-none focus:border-b-4 focus:border-b-gray-300 text-gray-800 shadow-sm"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button 
                            id="submit-group"
                            type="submit" 
                            className="cursor-grab px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                        >
                            Créer le groupe
                        </button>
                    </div>
                    
                </form>
            </div>
        </>
    )
}

export default AddGroupForm;