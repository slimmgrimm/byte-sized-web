import React from 'react'
import './ArticleSection.css'

function ArticleSection(props) {
    const {subtitle} = props
    const {text} = props

    return(
        <section className='article-section'>
            <h3 className='article-subtitle'> {subtitle} </h3>
            <p className='article-text'> {text} </p>
        </section>
    )
}

export default ArticleSection