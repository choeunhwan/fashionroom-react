import React, { createContext, useState } from 'react'

export const itemContext = createContext()
// export const CartContext = () => useContext(itemContext)

export const ItemsProvider = ({ children }) => {

    const [items, setItems] = useState([])
    const [isInCart, setIsInCart] = useState(false)

    const addItem = (item, quantity) => {
        // console.log(item, quantity, "item, quantity");
        const inCartList = items.find((i) => i.id === item.id)
        setIsInCart(true)
        if (inCartList) {
            inCartList.quantity += quantity
            setItems([...items])
        } else {
            setItems([...items, { ...item, quantity }])
        }
    }
    console.log(items, 'Mostrar cantidad producto');

    const removeItem = (id) => {
        items.splice(
            items.findIndex((i) => i.id === id), 1
        )
        setItems([...items])
        if (items.length === 0) {
            setIsInCart(false)
        }
    }

    const totalitemsPrice = () => {
        return items.reduce((add, i) => (add += i.price * i.quantity), 0)
    }

    const cartWidgetCount = () => {
        return items.reduce((add, i) => (add += i.quantity), 0)
    }

    const cleanListCart = () => {
        setItems([])
    }

    return (
        <itemContext.Provider
            value={{ items, addItem, removeItem, totalitemsPrice, isInCart, cartWidgetCount, cleanListCart }}>
            {children}
        </itemContext.Provider>
    )

}

export default itemContext;