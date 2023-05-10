import React from 'react'
import './Image.css'

function Image(props) {
    const {src} = props

    return (
        <figure className='image-container'>
            <img className='article-image'
                src={src}
                width={100}
                height={'auto'}
            />
        </figure>
        
    )
}

export default Image