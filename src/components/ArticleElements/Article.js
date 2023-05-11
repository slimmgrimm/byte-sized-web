import React from 'react'
import './Article.css'
import ArticleHeader from './ArticleHeader.js'
import ArticleSection from './ArticleSection.js'
import Image from './Image.js'

function Article(props) {

    return(
        <article>
            
            <ArticleHeader {...props}/>
            <ArticleSection {...props}/>
            <Image {...props}/>            

        </article>
    )
}

export default Article