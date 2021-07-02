import React, { createContext, useState } from 'react';

export const ItemContext = createContext ();

export const ItemProvider = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios('https://api.github.com/users').then((res) =>
            setUsers(res.data));
    }, [])

    return (
		<ItemsContext.Provider value={[users, setUsers]}>
			{props.children}
		</ItemsContext.Provider>
	);
}