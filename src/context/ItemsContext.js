import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ItemsContext = createContext ();

//data
export const ItemsProvider = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios('https://api.github.com/users').then((res) =>
            setItems(res.data));
    }, [])

    return (
		<ItemsContext.Provider value={[items, setItems]}>
			{props.children}
		</ItemsContext.Provider>
	);
}