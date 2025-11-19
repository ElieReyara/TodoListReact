function DisplayGroup({setActiveGroup, groups, isActive}) {
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