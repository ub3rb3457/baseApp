import React from 'react'
import useStore from './Store'

const Boom = () => {
    const { count, inc } = useStore()
    return (
        <div>
            <p>{count}</p>
            <button onClick={inc}>One Up</button>
        </div>
    )
}

export default Boom