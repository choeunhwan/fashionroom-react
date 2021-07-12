import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    return (
        <div>
            <Link to={'/cart'}>
                <div>
                    <span></span>
                </div>
            </Link>
        </div>
    )
}

export default CartWidget;