import React from 'react'

export default function Random({multiplier}) {
    return (
        <div>{Math.floor(Math.random() * multiplier)}</div>
    )
}