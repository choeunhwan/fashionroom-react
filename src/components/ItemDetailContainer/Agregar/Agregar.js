import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function Agregar() {

    const [user, setUsers] = useState([]);

	useEffect(() => {
		axios('https://api.github.com/users').then((res) => {
			setUsers(res.data);
		});
	}, []);

    const [cart, setCart] = useState ([]);

    const addToCart = (users) => {
        console.log ('Agregado');
        setCart([...cart, users]);
    }

    return (
        <div>
            <Button
                variant="primary"
                type='submit'
                value='add'
                onClick={() => addToCart(user)}
            >Comprar</Button>
        </div>
    )
}

export default Agregar;