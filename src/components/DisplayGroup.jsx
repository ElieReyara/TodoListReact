import { use, useEffect } from "react"

function DisplayGroup({setActiveGroup, groups, isActive}) {
    // J'affiche les groupe et je m'et en bleu le groupe actif si son id correspond a celle de la var
    //Le groupe actif par defaut au lancement de l'app est le premier de la liste
    useEffect(() => {
        setActiveGroup(groups[0].id);
    }, []);
    
    return (
        <>
            {groups.map((group) => (
                <div 
                    key={group.id}
                    data-id={group.id}
                    className={`relative cursor-pointer ${isActive === group.id ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-800'}`}
                    onClick={() => setActiveGroup(group.id)}
                >
                    <span>{group.name}</span>
                    {isActive === group.id ? 
                    (
                        <div className= 'absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t'></div>
                    ) : 
                    null}
                </div>
            ))}                        
        </>
    )
}

export default DisplayGroup