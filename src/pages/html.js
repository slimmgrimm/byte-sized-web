import React from 'react'
import Article from '../components/ArticleElements/Article.js'
import './html.css'
import boilerPlate from '../images/boilerplate.svg'
import tagExample from '../images/tag-example.svg'

function HtmlPage() {
    return (
        <div>
            <Article
                title='What is HTML?'
                text='HyperText Markup Language defines the structure of a webpage. An HTML element is the basic building block of a webpage and is indicated by HTML tags. Here is a element bound by <h1> tags: '
                code='<h1>Title of Section</h1>'
                src={tagExample}

            />

            <Article
                title='HTML Boilerplate'
                text='Boilerplate code is a template of the bare minimum code that you need in order to share a page across the web. This template requires only 3 tags to create a basic web page.'
                src={boilerPlate}

            />

            <Article 
                title='Main Root'
                text='The <html> tag represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.'
            />

        </div>

    )
}

export default HtmlPage