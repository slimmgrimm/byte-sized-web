import React from 'react'
import './ArticleHeader.css'

function ArticleHeader(props) {
    const { title } = props

    return (
        <header className='article-header'>
            <h2 className='article-title'> {title} </h2>
        </header>
    )
}

export default ArticleHeader