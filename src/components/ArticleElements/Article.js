import React from 'react'
import './Article.css'

function Article(props) {
    const {title} = props
    const {subtitle} = props
    const {text} = props
    const {code} = props

    return(
        <article>

            <header className='article-header'>
                <h2 className='article-title'> {title} </h2>
            </header>

            <h3 className='article-subtitle'> {subtitle} </h3>
            <p className='article-text'> {text} </p>

            <pre className='article-code'>
                <code> {code} </code>
            </pre>

        </article>
    )
}

export default Article