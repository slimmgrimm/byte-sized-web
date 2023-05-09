import React from 'react'
import './Image.css'

function Image(props) {
    const {src} = props

    return (
        <img
            src={src}
            width={100}
            height={100}
        />
    )
}

export default Image