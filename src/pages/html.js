import React from 'react'
import Article from '../components/ArticleElements/Article.js'

function HtmlPage () {
    return (
        <div>
            <Article 
                title='What is HTML?'
                text='HyperText Markup Language defines the structure of webpages. HTML elements are the basic building blocks of a webpage and are indicated by HTML tags. Here is a HTML element bound by <h1> tags: '
                code='<h1>Title of Section</h1>'
                
            />
            <Article
                title='HTML Boilerplate'
                text='Boilerplate code is the barebones template for getting a webpage to display on your screen. There are only 3 tags you need to get started: <html>, <head>, and <body> '
                code='This will be great when I figure out multiple lines'
            />
        </div>
 
    )
}

export default HtmlPage

// <article className='html-page'>
// <h1>HTML</h1>
// <p>HTML or HyperText Markup Language defines the structure and content of webpages. An HTML element is like a basic lego piece of a webpage. </p>
// <pre>
//     <code>
//         {` <h1>Title of Section</h1> `}<br/>
//         {` <p>This is where some description goes.</p>`}
//     </code>
// </pre>
// </article>