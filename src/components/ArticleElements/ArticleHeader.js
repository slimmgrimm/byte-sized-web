import React from 'react'
import './ArticleHeader.css'

function ArticleHeader(props) {
    const { title } = props
    const { headerStyle } = props

    return (
        <header className={headerStyle}>
            <h2 className='article-title'> {title} </h2>
        </header>
    )
}

export default ArticleHeader